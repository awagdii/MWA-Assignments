const myServer = require('http');
const fs = require('fs');
const path = require('path');


//Read file using streams
myServer.createServer((request, response) => {
    var readable = fs.createReadStream(
        path.join(__dirname, './big.file'),
        {encoding: 'utf8', highWaterMark: 16 * 1024}
    );

    //handle every event and display to user
    readable.on('data', (chunk) => response.write(chunk));

}).listen(8000, () => console.log('listining on 8000 for processing file by streams'))

//-----------------------------------------------------------------------------------------------------------//

//Read file using ReadFile
myServer.createServer((request, response) => {
    fs.readFile(path.join(__dirname, './big.file'),
        {encoding: 'utf8'},
        //here we have the callback function
        (err, data) => {
            if (err) throw err;
            response.write(data);
        }
    );
}).listen(8001, () => console.log('listining on 8001 for processing file by readFile'))

//-----------------------------------------------------------------------------------------------------------//

//Read file using ReadFile
myServer.createServer((request, response) => {
    var data = fs.readFileSync(path.join(__dirname, './big.file'), 'utf8');
    response.write(data);

}).listen(8002, () => console.log('listining on 8002 for processing file by readFileSync'))
