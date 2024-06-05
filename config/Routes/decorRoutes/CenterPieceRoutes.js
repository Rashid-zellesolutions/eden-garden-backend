const express = require('express');
const Add = require('../../Controller/Decor/centerPieces/Add');
const Get = require('../../Controller/Decor/centerPieces/Get');
const GetSingleData = require('../../Controller/Decor/centerPieces/GetSingle');
const Update = require('../../Controller/Decor/centerPieces/Update');
const Delete = require('../../Controller/Decor/centerPieces/Delete');

// Multer Midleware
const {dynamicMulter, handleFaildRequest} = require('../../midlewares/multerMidleware');

const router = express.Router();

const addCenterPieceMidlware = dynamicMulter('/Decor/Center-Piece', ['lightningImage'], 1, ['image/jpg', 'image/jpeg', 'image/png'], 2*1024*1024);

router.post('/add-centerpiece', addCenterPieceMidlware, handleFaildRequest, (req, res) => {
    if(req.success){
        res.status(200).json({success: true, message: "Image Uploaded"})
    }else{
        res.status(500).json({success: false, message: "Image Not Uploads"})
    }
},  Add);
router.get('/get-centerpiece-data', Get);
router.get('/get-single-centerpiece/:id', GetSingleData)
router.put('/update-centerpiece/:id', addCenterPieceMidlware, Update);
router.delete('/delete-centerpiece/:id', Delete)

module.exports = router;
