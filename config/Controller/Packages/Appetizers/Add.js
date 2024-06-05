const {Appetizers} = require('../../../Model/FoodMenue/Packages');

const Add = async(req, res) => {
    const {name, pacFor, cost} = req.body
    const appetizerImage = req.files['appetizersImage'];
    if(!name || !pacFor || !cost || !appetizerImage){
        res.status(400).json({success: false, message: "Required Fileds are missing"});
    }
    try {
        const appetizerObj = Appetizers({
            name,
            pacFor,
            cost,
            appetizersImageName: appetizerImage[0].originalname,
            appetizersImagePath: appetizerImage[0].path
        });
        await appetizerObj.save();
        res.status(200).json({success: true, message: "Data Upload", appetizerObj})
    } catch (error) {
        console.error("Error Adding Data", error);
        res.status(500).json({success: fasle, message: "Internal Server Error"})
    }
}

module.exports = Add;