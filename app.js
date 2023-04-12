let Reader = require('./Reader');
let Writer = require('./Writer');
let PDFWriter = require('./PDFWriter');
let Processor = require('./Processor');
let Table = require('./Table');
let HtmlParse = require('./HtmlParse');

const reader = new Reader();
const writer = new Writer();

async function main(){
    var data = await reader.Read("./file.csv");
    var dataProcessed = Processor.Process(data);
    var table = new Table(dataProcessed);
    var html = await HtmlParse.Parse(table);

    writer.Write(Date.now()+".html", html);
    PDFWriter.WritePDF(Date.now()+".PDF", html);
}

main();

