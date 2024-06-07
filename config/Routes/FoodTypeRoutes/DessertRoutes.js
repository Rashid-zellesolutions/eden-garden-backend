const express = require('express');

const Add = require('../../Controller/Packages/Desserts/Add');
const Get = require('../../Controller/Packages/Desserts/Get');
const GetSingleData = require('../../Controller/Packages/Desserts/GetSingle');
const Update = require('../../Controller/Packages/Desserts/Update');
const Delete = require('../../Controller/Packages/Desserts/Delete');

const {dynamicMulter} = require('../../midlewares/multerMidleware');
const AddDessertMulter = dynamicMulter('/FoodType/Dessert', ['dessertImage'], 1, ['image/jpg', 'image/jpeg', 'image/png'], 2*1024*1024);

const router = express.Router();

router.post('/add-dessert', AddDessertMulter, Add);
router.get('/get-dessert', Get);
router.get('/get-single-dessert', GetSingleData);
router.put('/update-dessert', AddDessertMulter, Update);
router.delete('/delete-dessert', Delete);

module.exports = router;