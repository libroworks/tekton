// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { CatScratchEditorProvider } from './catScratchEditor';
import { TektonEditorProvider } from './tektonEditor';
import { MarkdownEngine } from './markdownEngine';
import { getMarkdownExtensionContributions } from './markdownExtensions';
import { githubSlugifier } from './slugify';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// MakdownEngineの生成
	const contributions = getMarkdownExtensionContributions(context);
	const engine = new MarkdownEngine(contributions, githubSlugifier);

	context.subscriptions.push(CatScratchEditorProvider.register(context));
	context.subscriptions.push(TektonEditorProvider.register(context, engine));
}

// this method is called when your extension is deactivated
// export function deactivate() {}
