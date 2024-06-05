const {Lightning} = require('../../../Model/decore/Decor');

const Add = async(req, res) => {
    const { name, cost } = req.body;
    const lightningImage = req.files['lightningImage'];
    
    if(!name || !cost || !lightningImage){
        return res.status(400).json({status: 400, message: "Required fields are missing"});
    }
    
    try {
     const lightObj = Lightning({
        name,
        cost,
        lightningImageName: lightningImage[0].originalname,
        lightningImagePath: lightningImage[0].path,
     });
    await lightObj.save();
    res.status(200).json({status: 200, message: "Data Added Successfully"});

    } catch (error) {
        console.error("Error Adding Backdrop and mandap", error);
        res.status(500).json({status: 500, message: "Internal Server Error"});
    }
};

module.exports = Add;