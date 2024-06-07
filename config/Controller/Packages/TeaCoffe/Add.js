const {TeaCoffe} = require('../../../Model/FoodMenue/Packages');

const Add = async(req, res) => {
    const {name, pacFor, cost} = req.body;
    const teaCoffeeImage = req.files['teaCoffeImage'];
    if(!name || !pacFor || !cost || !teaCoffeeImage  ){
        res.status(404).json({success: false, message: "required fields are missing"});
    }
    try {
        const teaCoffeObj = TeaCoffe({
            name,
            pacFor,
            cost,
            teaCoffeImageName: teaCoffeeImage[0].originalname,
            teaCoffeImagePath: teaCoffeeImage[0].path
        });
        await teaCoffeObj.save();
        res.status(200).json({success: true, message: "Data Added", teaCoffeObj});


    } catch (error) {
        console.error("Error Adding Data", error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

module.exports = Add;