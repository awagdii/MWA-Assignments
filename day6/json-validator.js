module.exports = (req, res, next) => {
    if (req.method == 'POST' || req.method === 'PUT') {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            try {
                req.body = JSON.parse(data);
            } catch (error) {
                return next(new Error('JSON NOT VALID'));
            }
        })
    }
    return next();
}