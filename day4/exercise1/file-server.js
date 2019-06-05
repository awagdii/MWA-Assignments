const myServer = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const process = require('child_process');

myServer.createServer((request, response) => {
    var myParsedUrl = url.parse(request.url, true);
    const myUrl = myParsedUrl.path;
    console.log(myUrl);
    console.log(path.join(__dirname, myUrl));
    if (myUrl != '/favicon.ico') {
        const myFileReaderProcess = process.fork('./day4/exercise1/readFile');
        myFileReaderProcess.send(path.join(__dirname, myUrl));
        myFileReaderProcess.on('message', (chunks) => response.end(chunks))
    } else {
        response.end();
    }

}).listen(8000, () => console.log('listining on 8000 for processing file by streams'))
