
const fs = require('fs');

process.on('message', (myUrl) => {
    var readable = fs.createReadStream(
        myUrl, { encoding: 'utf8', highWaterMark: 16 * 1024 }
    );
    readable.on('data', (chunk) => process.send(chunk));

})