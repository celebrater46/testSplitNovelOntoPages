"use strict";

const testLine = "男の名は、黒野｜堕天男《ルシファー》。";
const maxLines = 20; // 何行で改ページするか
const box = document.getElementById("box");

// ｜堕天男《ルシファー》 -> <ruby><rb>堕天男</rb><rp>(</rp><rt>ルシファー</rt><rp>)</rp></ruby> 10+19+22+フリガナ
const convertRuby = (line) => {
    let str = line;
    if(str.indexOf("｜") > -1){
        str = str.replace(/｜/g, "<ruby><rb>");
        str = str.replace(/《/g, "</rb><rp>(</rp><rt>");
        str = str.replace(/》/g, "</rt><rp>)</rp></ruby>");
    }
    return str;
}

const createLinesArray = (line) => {
    const converted = convertRuby(line);
    let lines = [];
    for(let i = 0; i < 30; i++){
        lines.push("<p>" + converted + "</p>" + "\n");
    }
    return lines;
}

// const createDiv = () => {
//
// }

const test = (line) => {
    let lines = createLinesArray(testLine);
    let i = 0;
    let pages = [];
    while(lines.length > maxLines){
        pages.push(new Page(i, lines.splice(0, maxLines), false));
        i++;
    }
    if(lines.length > 0) {
        pages.push(new Page(i, lines, true));
    }
    // return pages;
    let el = "";
    pages.map((page) => {
        el += page.div;
    });
    box.innerHTML = el;
}

// console.log(test(testLine));
test(testLine);