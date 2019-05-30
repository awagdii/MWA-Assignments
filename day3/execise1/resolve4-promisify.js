const dns = require('dns');
const util = require('util');

(async function () {
    try {
        //promisify returns a promise of resolve4 then i invoke it directly given the url
        // and wait until it respond to set the result
        const result = await util.promisify(dns.resolve4)('www.mum.edu');
        console.log(result)
    } catch (err) {
        console.error('ERROR:', err);
    }
}());



