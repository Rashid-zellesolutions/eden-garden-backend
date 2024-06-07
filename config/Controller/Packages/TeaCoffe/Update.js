const {TeaCoffe} = require('../../../Model/FoodMenue/Packages');

const Update = async(req, res) => {
    const {id} = req.params;
    const {name, pacFor, cost} = req.body;
    const teaCoffeeImage = req.files['teaCoffeImage'];
    try {
        const teaCoffeObj = await TeaCoffe.findById(id);
        if(!teaCoffeObj){
            res.status(404).json({success: false, message: "Data not found"});
        }
        if(name) teaCoffeObj.name = name;
        if(pacFor) teaCoffeObj.pacFor = pacFor;
        if(cost) teaCoffeObj.cost = cost;
        if(teaCoffeeImage){
            teaCoffeObj.teaCoffeImageName = teaCoffeeImage[0].originalname;
            teaCoffeObj.teaCoffeImagePath = teaCoffeeImage[0].path
        }
        await teaCoffeObj.save();
        res.status(200).json({success: true, message: "Data Updated", teaCoffeObj})
    } catch (error) {
        console.error("Error Updating Data", error);
        res.status(500).json({success: false, message: "Internel Server Error"});
    }
}

module.exports = Update;