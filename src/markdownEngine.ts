import MarkdownIt = require("markdown-it");

export class MarkdownEngine{
    private md:MarkdownIt;
    constructor(){
        this.md = new MarkdownIt();
    }

    public render(mdtext:string): string{
        const html = this.md.render(mdtext);
        return html;
    }
}