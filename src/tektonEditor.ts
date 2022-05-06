import * as vscode from 'vscode';
import { getNonce } from './util';

export class TektonEditorProvider implements vscode.CustomTextEditorProvider{

    public static register(context: vscode.ExtensionContext): vscode.Disposable{
        // Show Previewコマンドを登録
        vscode.commands.registerCommand('tekton.showEditor', ()=>{
            const activeEditor = vscode.window.activeTextEditor;
            if(!activeEditor){
                return;
            }
            const uri = activeEditor.document.uri;
            if(uri.path.includes('.tekton.md')){
                vscode.commands.executeCommand('vscode.openWith', uri, 
                TektonEditorProvider.viewType);
            }
        });

        //カスタムエディタを登録
        const provider = new TektonEditorProvider(context);
        const providerRegistration = vscode.window.registerCustomEditorProvider(
            TektonEditorProvider.viewType, provider);
        return providerRegistration;            
    }

    private static readonly viewType = 'tekton.markdown';

    constructor(private readonly context: vscode.ExtensionContext){}

    public async resolveCustomTextEditor(
        document: vscode.TextDocument, 
        webviewPanel: vscode.WebviewPanel, 
        _token: vscode.CancellationToken
    ): Promise<void> {
        //Webviewの初期コンテンツを設定
        webviewPanel.webview.options = {
            enableScripts: true,
        };
        webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview);

        // webviewのJSに更新要求を送る
        function updateWebview(){
            webviewPanel.webview.postMessage({
                type: 'update',
                text: document.getText(),
            });
        }

        // ドキュメントとビューの同期
        const changeDocumentSubscription = vscode.workspace.onDidChangeTextDocument(e => {
            if (e.document.uri.toString() === document.uri.toString()){
                updateWebview();
            }
        });

        // editorが閉じたときの処理
        webviewPanel.onDidDispose(()=>{
            changeDocumentSubscription.dispose();
        });

        // Webviewからメッセージを受信
        webviewPanel.webview.onDidReceiveMessage(e=>{
            switch(e.type){
                case 'add':
                    return;
                case 'delete':
                    return;
            }
        });

        updateWebview();
    }

    // 初期のHTMLを取得
    private getHtmlForWebview(webview: vscode.Webview): string{
        // scriptとcssを割り当て
        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this.context.extensionUri, 'media', 'tekton.js'));
        const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this.context.extensionUri, 'media', 'reset.css'));
        const styleVSCodeUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this.context.extensionUri, 'media', 'vscode.css'));
        const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this.context.extensionUri, 'media', 'catScratch.css'));


        // スクリプトのホワイトリスト
        const nonce = getNonce();
        
		return /* html */`
			<!DOCTYPE html>
			<html lang="ja">
			<head>
				<meta charset="UTF-8">

				<!--
                セキュリティポリシー
                https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Content-Security-Policy/img-src
                画像のみファイルシステムを使える
				-->
				<meta http-equiv="Content-Security-Policy" 
                    content="default-src 'none'; 
                    img-src ${webview.cspSource} filesystem://*; 
                    style-src ${webview.cspSource}; 
                    script-src 'nonce-${nonce}';">

				<meta name="viewport" content="width=device-width, initial-scale=1.0">

				<link href="${styleResetUri}" rel="stylesheet" />
				<link href="${styleVSCodeUri}" rel="stylesheet" />
				<link href="${styleMainUri}" rel="stylesheet" />

				<title>Cat Scratch</title>
			</head>
			<body>
				<div id="maincontent">
				</div>
				
				<script nonce="${nonce}" src="${scriptUri}"></script>
			</body>
			</html>`;

    }
}