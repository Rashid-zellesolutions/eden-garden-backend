const express = require('express');
const Add = require('../../Controller/Decor/StageDimentions/Add');
const Get = require('../../Controller/Decor/StageDimentions/Get')
const GetSingleData = require('../../Controller/Decor/StageDimentions/GetSingle');
const Update = require('../../Controller/Decor/StageDimentions/Update');
const Delete = require('../../Controller/Decor/StageDimentions/Delete');

const router = express.Router();

router.post('/add-stage-dimention', Add);
router.get('/get-all-stage-dimentions', Get);
router.get('/get-single-stage-dimention/:id', GetSingleData);
router.put('/update-stage-dimention/:id', Update);
router.delete('/delete-stage-dimention/:id', Delete)

module.exports = router;