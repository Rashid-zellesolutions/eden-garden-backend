const {JuiceDrinks} = require('../../../Model/FoodMenue/Packages');

const Add = async(req, res) => {
    const {name, pacFor, cost} = req. body;
    const juiceDrinkImage = req.files['juiceDrinkImage'];
    if(!name || !pacFor || cost || !juiceDrinkImage){
        res.status(404).json({success: false, message: "required fields are missing"});
    }
    try {
        const juiceDrinkObj = JuiceDrinks({
            name,
            pacFor,
            cost,
            juiceDrinkImageName: juiceDrinkImage[0].originalname,
            juiceDrinkImagePath: juiceDrinkImage[0].path
        });
        await juiceDrinkObj.save();
        res.status(200).json({success: true, message: "Data Add", juiceDrinkObj})
    } catch (error) {
        console.error("Error Adding Data", error);
        res.status(500).json({success: false, message: "Internel Server Error"});
    }
}

module.exports = Add;