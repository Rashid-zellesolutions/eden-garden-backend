const express = require('express');

const Add = require('../../Controller/Packages/TeaCoffe/Add');
const Get = require('../../Controller/Packages/TeaCoffe/Get');
const GetSingleData = require('../../Controller/Packages/TeaCoffe/SingleGet');
const Update = require('../../Controller/Packages/TeaCoffe/Update');
const Delete = require('../../Controller/Packages/TeaCoffe/Delete');

const {dynamicMulter} = require('../../midlewares/multerMidleware');
const AddTeaCoffeMulter = dynamicMulter('/FoodType/TeaCoffe', ['teaCoffeImage'], 1, ['image/jpg', 'image/jpeg', 'image/png'], 2*1024*1024);

const router = express.Router();

router.post('/add-tea-coffe', AddTeaCoffeMulter, Add);
router.get('/get-tea-coffee', Get);
router.get('/get-single-tea-coffe', GetSingleData);
router.put('/update-tea-coffe', AddTeaCoffeMulter, Update);
router.delete('/delete-tea-coffe', Delete);

module.exports = router;