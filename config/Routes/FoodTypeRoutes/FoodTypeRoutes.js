const express = require('express');

const Add = require('../../Controller/Packages/FoodType/Add');
const Get = require('../../Controller/Packages/FoodType/Get');
const GetSingleData = require('../../Controller/Packages/FoodType/SingleGet');
const Update = require('../../Controller/Packages/FoodType/Update');
const Delete = require('../../Controller/Packages/FoodType/Delete');

const router = express.Router();

router.post('/add-food-type', Add);
router.get('/get-food-type', Get);
router.get('/get-single-food', GetSingleData);
router.put('/update-food-type', Update);
router.delete('/delete-food-type', Delete);

module.exports = router;