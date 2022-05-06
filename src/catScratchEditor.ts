import { timeStamp } from 'console';
import * as vscode from 'vscode';
import { getNonce } from './util';

export class CatScratchEditorProvider implements vscode.CustomTextEditorProvider{
    public static register(context: vscode.ExtensionContext): vscode.Disposable{
        // showPreviewコマンドを登録
        vscode.commands.registerCommand('tekton.showPreviewCS', () =>{
			const activeEditor = vscode.window.activeTextEditor;
			if(!activeEditor) {
				return;
			}
            console.log(activeEditor.document.uri);
            // カスタムエディタで開く
			vscode.commands.executeCommand('vscode.openWith', activeEditor?.document.uri, CatScratchEditorProvider.viewType);
		});

        // カスタムエディタを登録
        const provider = new CatScratchEditorProvider(context);
        const providerRegistration = vscode.window.registerCustomEditorProvider(
            CatScratchEditorProvider.viewType, provider);
        return providerRegistration;
    }

    private static readonly viewType = 'tekton.catScratch';
    private static readonly scratchCharacters = ['😸', '😹', '😺', '😻', '😼', '😽', '😾', '🙀', '😿', '🐱'];

    constructor(private readonly context: vscode.ExtensionContext){}

    public async resolveCustomTextEditor(
        document: vscode.TextDocument, 
        webviewPanel: vscode.WebviewPanel, 
        _token: vscode.CancellationToken
    ): Promise<void> {

        // Webviewの初期コンテントを設定
        webviewPanel.webview.options = {
            enableScripts: true,    //スクリプトの有効化
        };
        webviewPanel.webview.html = this.getHtmlForWebview(webviewPanel.webview);

        // Webview更新時はwebviewにupdateメッセージを送る
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
                    this.addNewScratch(document);
                    return;
                case 'delete':
                    this.deleteScratch(document, e.id);
                    return;
            }
        });

        updateWebview();
    }
    
    // 静的なHTMLを取得
    private getHtmlForWebview(webview: vscode.Webview): string{
        // scriptとcssを割り当て
        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(
            this.context.extensionUri, 'media', 'catScratch.js'));
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
			<html lang="en">
			<head>
				<meta charset="UTF-8">

				<!--
				Use a content security policy to only allow loading images from https or from our extension directory,
				and only allow scripts that have a specific nonce.
                セキュリティポリシー
				-->
				<meta http-equiv="Content-Security-Policy" 
                    content="default-src 'none'; 
                    img-src ${webview.cspSource}; style-src ${webview.cspSource}; 
                    script-src 'nonce-${nonce}';">

				<meta name="viewport" content="width=device-width, initial-scale=1.0">

				<link href="${styleResetUri}" rel="stylesheet" />
				<link href="${styleVSCodeUri}" rel="stylesheet" />
				<link href="${styleMainUri}" rel="stylesheet" />

				<title>Cat Scratch</title>
			</head>
			<body>
				<div class="notes">
					<div class="add-button">
						<button>Scratch!</button>
					</div>
				</div>
				
				<script nonce="${nonce}" src="${scriptUri}"></script>
			</body>
			</html>`;
	}


    // スクラッチの追加
    private addNewScratch(document: vscode.TextDocument){
        const json = this.getDocumentAsJson(document);
        const character = CatScratchEditorProvider.scratchCharacters[
            Math.floor(Math.random()) * 
            CatScratchEditorProvider.scratchCharacters.length];
        json.scratches = [
            ...(Array.isArray(json.scratches) ? json.scratches : []),
            {
                id: getNonce(),
                text: character,
                created: Date.now(),
            }
        ];

        return this.updateTextDocument(document, json);
    }

    // スクラッチの削除
    private deleteScratch(document: vscode.TextDocument, id: string){
        const json = this.getDocumentAsJson(document);
        if (!Array.isArray(json.scratches)){
            return;
        }
		json.scratches = json.scratches.filter((note: any) => note.id !== id);

        return this.updateTextDocument(document, json);
    }

    // ドキュメントをJSON化
    private getDocumentAsJson(document: vscode.TextDocument): any{
        const text = document.getText();
        if(text.trim().length === 0){
            return {};
        }
        try{
            return JSON.parse(text);
        } catch {
            throw new Error('JSONのドキュメントを取得できない');
        }
    }

    // テキストドキュメントの更新
    private updateTextDocument(document:vscode.TextDocument, json: any){
        const edit = new vscode.WorkspaceEdit();

        // 修正範囲を指定できる
        edit.replace(
            document.uri,
            new vscode.Range(0, 0, document.lineCount, 0),
            JSON.stringify(json, null, 2),
        );

        return vscode.workspace.applyEdit(edit);
    }

}