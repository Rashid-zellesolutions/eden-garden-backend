const express = require('express');

const Add = require('../../Controller/Packages/FoodType/Add');
const Get = require('../../Controller/Packages/FoodType/Get');
const GetSingleData = require('../../Controller/Packages/FoodType/SingleGet');
const updateFoodType = require('../../Controller/Packages/FoodType/Update');
const Delete = require('../../Controller/Packages/FoodType/Delete');

const router = express.Router();

router.post('/add-food-type', Add);
router.get('/get-food-type', Get);
router.get('/get-single-food/:id', GetSingleData);
router.put('/update-food-type/:id', updateFoodType);
router.delete('/delete-food-type/:id', Delete);

module.exports = router;