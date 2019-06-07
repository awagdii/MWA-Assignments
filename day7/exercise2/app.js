const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');
const coursesRouter = require('./course-router');

var db;
app.use(express.json());
app.use(async (req, res, next) => {
    if (!db) {
        await client.connect();
        db = client.db('homework07').collection('homework07');
    }
    req.db = db;
    next();
});

app.use('/courses', coursesRouter);

app.listen(3000, () => console.log('app is running '))
