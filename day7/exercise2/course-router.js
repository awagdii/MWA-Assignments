const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {

    const data = await req.db.find({}).toArray();
    res.json(data);
})
router.get('/:q', async (req, res) => {

    console.log(req.params.q);
    const data = await req.db.find({ course: req.params.q }).toArray();
    res.json(data);
})
router.post('/', async (req, res) => {
console.log('in post')
    const data = req.body;
    await req.db.insertOne(data);
    res.json({ "successfully Inserted": data });
})


module.exports = router;