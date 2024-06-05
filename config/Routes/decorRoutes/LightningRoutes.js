const express = require('express');
const Add = require('../../Controller/Decor/Lightning/Add');
const Get = require('../../Controller/Decor/Lightning/Get');
const GetSingleData = require('../../Controller/Decor/Lightning/GetSingle');
const Update = require('../../Controller/Decor/Lightning/Update');
const Delete = require('../../Controller/Decor/Lightning/Delete');

// Multer Midleware
const {dynamicMulter} = require('../../midlewares/multerMidleware');

const router = express.Router();

const addLightningMidlware = dynamicMulter('/Decor/Lightning', ['lightningImage'], 1, ['image/jpg', 'image/jpeg', 'image/png'], 2*1024*1024);

router.post('/add-lightning', addLightningMidlware,  Add);
router.get('/get-lightning-data', Get);
router.get('/get-single-lightning/:id', GetSingleData)
router.put('/update-lightning/:id', addLightningMidlware, Update);
router.delete('/delete-lightning/:id', Delete)

module.exports = router;
