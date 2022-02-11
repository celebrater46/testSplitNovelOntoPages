class Page {
    constructor(id, lines, isEnd) {
        this.id = id;
        this.lines = lines; // array
        this.isEnd = isEnd; // エピソードの最終ページかどうか
        this.div = this.createPage();
    }

    createPage() {
        let str = "<div id='line-" + this.id + "' class='page'>"
        this.lines.map((p)=>{
            str += p;
        });
        return str + "</div>";
    }
}