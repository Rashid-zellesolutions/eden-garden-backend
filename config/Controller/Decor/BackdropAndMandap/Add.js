const {BackdropAndMandap} = require('../../../Model/decore/Decor');

const Add = async(req, res) => {
    const { name, cost } = req.body;
    const backDropImage = req.files['backDropImage'];
    
    if(!name || !cost || !backDropImage){
        return res.status(400).json({status: 400, message: "Required fields are missing"});
    }
    
    try {
     const backdropObj = BackdropAndMandap({
        name,
        cost,
        backdropImageName: backDropImage[0].originalname,
        backdropImagePath: backDropImage[0].path,
     });
    await backdropObj.save();
    res.status(200).json({status: 200, message: "Data Added Successfully"});

    } catch (error) {
        console.error("Error Adding Backdrop and mandap", error);
        res.status(500).json({status: 500, message: "Internal Server Error"});
    }
};

module.exports = Add;