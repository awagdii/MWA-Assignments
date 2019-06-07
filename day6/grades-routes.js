const express = require('express');
const router = express.Router();

var grades = [{ id: 1, name: 'Ahmed', course: 'CS572', grade: 95 }];

router.get('/', (req, res) => {
    res.json(grades);
})
router.post('/', express.json(), (req, res) => {
    console.log(req.body);
    grades.push(req.body);
    res.json({ info: 'grade inserted successfully' });
})
router.put('/:id', express.json(), (req, res) => {
    let index;
    if (grades)
        index = grades.findIndex((x) => x.id === req.param.id); console.log(index);
    if (index) {
        grades[index] = (req.body);
        res.json({ info: 'updated successfully' });
    } else {
        res.status(500).json({ info: 'No such Element' });
    }

})
router.delete('/:id', express.json(), (req, res) => {
    let index;
    if (grades)
        index = grades.findIndex((x) => x.id === req.param.id);
    if (index) {
        grades = grades.splice[index];
        res.json({ info: 'Deleted successfully' });
    } else {
        res.status(500).json({ info: 'No such Element' });
    }
})

module.exports = router;