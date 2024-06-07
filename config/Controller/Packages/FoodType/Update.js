const FoodType = require('../../../Model/FoodMenue/FoodType');

const Update = async(req, res) => {
    const {id} = req.params;
    const {foodType, packages} = req.body
    try {
        const foodTypeObj = await FoodType.findById(id);
        if(!foodTypeObj){
            res.status(404).jsn({success: false, message: "Data not found"});
        }
        if(foodType) foodTypeObj.foodType = foodType;
        if(packages) foodTypeObj.packages = packages;
        await foodTypeObj.save();
        res.status(200).json({success: true, message: "Data Updated", foodTypeObj})
    } catch (error) {
        console.error("Error Updating Data", error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

module.exports = Update;