const express = require('express');

const Add = require('../../Controller/Packages/Appetizers/Add');
const Get = require('../../Controller/Packages/Appetizers/Get');
const GetSingleData = require('../../Controller/Packages/Appetizers/GetSingle');
const Update = require('../../Controller/Packages/Appetizers/Update');
const Delete = require('../../Controller/Packages/Appetizers/Delete');

const {dynamicMulter} = require('../../midlewares/multerMidleware');
const AddAppetizers = dynamicMulter('/FoodType/Appetiser', ['appetizersImage'], 1, ['image/jpg', 'image/jpeg', 'image/png'], 2*1024*1024);

const router = express.Router();

router.post('/add-appetizer', AddAppetizers, Add);
router.get('/get-appetizer', Get);
router.get('/get-single-appetizer', GetSingleData);
router.put('/update-appetizer', AddAppetizers, Update);
router.delete('/delete-appetizer', Delete);

module.exports = router;