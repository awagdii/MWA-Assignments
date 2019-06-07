const express = require('express');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'accees.log'), {flags: 'a'});
app.use(morgan('combined', { stream: accessLogStream }));

app.use(cors());
app.use(require('./json-validator.js'))
app.use('/grades', require('./grades-routes.js'));


app.listen(3000, () => console.log('Server is started on port 3000'))