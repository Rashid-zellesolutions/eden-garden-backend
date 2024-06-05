const {ChairSelection} = require('../../../Model/decore/Decor');

const Add = async(req, res) => {
    const { name, cost } = req.body;
    const chairSelectionImage = req.files['chairSelectionImage'];
    
    if(!name || !cost || !chairSelectionImage){
        return res.status(400).json({status: 400, message: "Required fields are missing"});
    }
    
    try {
     const charObject = ChairSelection({
        name,
        cost,
        chairImageName: chairSelectionImage[0].originalname,
        chairImagePath: chairSelectionImage[0].path,
     });
     
    await charObject.save();
    res.status(200).json({status: 200, message: "Data Added Successfully"});

    } catch (error) {
        console.error("Error Adding Chair Selection", error);
        res.status(500).json({status: 500, message: "Internal Server Error"});
    }
};

module.exports = Add;