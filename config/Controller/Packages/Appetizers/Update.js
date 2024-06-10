const {Appetizers} = require('../../../Model/FoodMenue/Packages');

const Update = async(req, res) => {
    const {id} = req.params;
    const {name, pacFor, cost} = req.body;
    const appetizerImage = req.files['appetizerImage'];
    try {
        const appetizerObj = await Appetizers.findById(id);
        if(!appetizerObj){
            res.status(404).json({success: false, message: "Data not found"})
        }
        if(name) appetizerObj.name = name;
        if(pacFor) appetizerObj.pacFor = pacFor;
        if(cost) appetizerObj.cost = cost;
        if(appetizerImage){
            appetizerObj.appetizersImageName = appetizerImage[0].originalname;
            appetizerObj.appetizersImagePath = appetizerImage[0].path
        }
        await appetizerObj.save();
        res.status(200).json({success: true, message: "Data Updated", appetizerObj});
    } catch (error) {
        console.error("Error Updating Data", error);
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
}

module.exports = Update;