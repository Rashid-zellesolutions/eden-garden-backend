const FoodType = require('../../../Model/FoodMenue/FoodType');

const Add = async(req, res) => {
    const {foodType, packages} = req.body
    try {
        const foodTypeObj = new FoodType({
            foodType,
            packages
        })
        await foodTypeObj.save();
        res.status(200).json({success: true, message: "Foood Type Added"});
    } catch (error) {
        console.error("Error Adding Food Type", error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

module.exports = Add;