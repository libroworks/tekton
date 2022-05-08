import * as vscode from 'vscode';
import { getNonce } from './util';
import { MarkdownEngine } from './markdownEngine';

export class TektonEditorProvider implements vscode.CustomTextEditorProvider{

    public static register(context: vscode.ExtensionContext, engine: MarkdownEngine): vscode.Disposable{
        // Show Previewコマンドを登録
        vscode.commands.registerCommand('tekton.showEditor', ()=>{
            const activeEditor = vscode.window.activeTextEditor;
            if(!activeEditor){
                return;
            }
            const uri = activeEditor.document.uri;
            if(uri.path.endsWith('.tekton.md')){
                vscode.commands.executeCommand('vscode.openWith', uri, 
                TektonEditorProvider.viewType);
            }
        });

        //カスタムエディタを登録
        const provider = new TektonEditorProvider(context, engine);
        const providerRegistration = vscode.window.registerCustomEditorProvider(
            TektonEditorProvider.viewType, provider);
        return providerRegistration;            
    }

    private static readonly viewType = 'tekton.markdown';

    constructor(private readonly context: vscode.ExtensionContext,
        private readonly engine: MarkdownEngine){}

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

        // ドキュメントとビューの同期
        const changeDocumentSubscription = vscode.workspace.onDidChangeTextDocument(e => {
            if (e.document.uri.toString() === document.uri.toString()){
                this.updateWebview(webviewPanel, document);
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

        this.updateWebview(webviewPanel, document);
        this.updateMediaDialog(webviewPanel);
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
            this.context.extensionUri, 'media', 'tekton.css'));

        // スクリプトのホワイトリスト用nonce
        const nonce = getNonce();

        const folders = vscode.workspace.workspaceFolders;
        if(folders === undefined){
            vscode.window.showInformationMessage('Tekoton:フォルダーを開いてください');
        }
        
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
                    img-src ${webview.cspSource}; 
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
				<dialog id="mediaDialog" open>
                Please Open Folder.
                </dialog>
				<script nonce="${nonce}" src="${scriptUri}"></script>
			</body>
			</html>`;

    }

    // meidaDialogに挿入する画像ファイルのリストを入れる
    private async updateMediaDialog(webviewPanel: vscode.WebviewPanel) {
        // mediaフォルダー内の画像ファイル一覧を取得
        const medialist = await vscode.workspace.findFiles('media/**/*.{jpg,png}');
        console.log(medialist);

        // htmlを生成
        let reshtml = '';
        for(const media of medialist){
            const p = webviewPanel.webview.asWebviewUri(vscode.Uri.file(media.path));
            reshtml += `<div class="mediaItem"><img src="${p}" alt="${p}"></div>`;
        }
        webviewPanel.webview.postMessage({
            type: 'updateMedia',
            html: reshtml,
        });
    }

    // webviewのJSに更新要求を送る
    private updateWebview(webviewPanel: vscode.WebviewPanel, document: vscode.TextDocument){
        webviewPanel.webview.postMessage({
            type: 'update',
            text: document.getText(),
        });
    }
    
}



        // return  /* html */`
        //     <input id="TAB-01" type="radio" name="TAB" class="tab-switch" checked/><label class="tab-label" for="TAB-01">ボタン1</label>
        //     <div class="tab-content">
        //         <div class="mediaItem">ダミー</div>
        //         <div class="mediaItem">ダミー</div>
        //         <div class="mediaItem">ダミー</div>
        //     </div>
        //     <input id="TAB-02" type="radio" name="TAB" class="tab-switch"/><label class="tab-label" for="TAB-02">ボタン2</label>
        //     <div class="tab-content">
        //         <div class="mediaItem">ダミー</div>
        //         <div class="mediaItem">ダミー</div>
        //     </div>
        //     <input id="TAB-03" type="radio" name="TAB" class="tab-switch"/><label class="tab-label" for="TAB-03">ボタン3</label>
        //     <div class="tab-content">
        //         <div class="mediaItem">ダミー</div>
        //     </div>
        // `;   
