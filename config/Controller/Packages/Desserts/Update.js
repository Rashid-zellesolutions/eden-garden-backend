const {Desserts} = require('../../../Model/FoodMenue/Packages');

const Update = async(req, res) => {
    const {id} = req.params;
    const {name, pacFor, cost} = req.body;
    const dessertImage = req.files['dessertImage'];
    try {
        const dessertObj = await Desserts.findById(id);
        if(!dessertObj){
            res.status(404).json({success: false, message: "data not found"});
        }
        if(name) dessertObj.name = name;
        if(pacFor) dessertObj.pacFor = pacFor;
        if(cost) dessertObj.cost = cost;
        if(dessertImage){
            dessertObj.dessertsImageName = dessertImage[0].originalname;
            dessertObj.dessertsImagePath = dessertImage[0].path
        };
        console.log(dessertImage)
        await dessertObj.save();
        res.status(200).json({success: true, message: "data updated", dessertObj});
    } catch (error) {
        console.error("Error Updating Data", error);
        res.status(500).json({status: false, message: "Internal Server Error"});
    }
}

module.exports = Update;