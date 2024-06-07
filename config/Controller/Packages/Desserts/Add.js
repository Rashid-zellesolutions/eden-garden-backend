const {Desserts} = require('../../../Model/FoodMenue/Packages');

const Add = async(req, res) => {
    const {name, pacFor, cost} = req.body;
    const dessertImage = req.files['dessertImage'];
    if(!name || !pacFor || !cost || !dessertImage){
        res.status(404).json({success: false, message: "Required Fields Are Missing"});
    }
    try {
        const dessertObj = Desserts({
            name,
            pacFor,
            cost,
            dessertsImageName: dessertImage[0].originalname,
            dessertsImagePath: dessertImage[0].path
        });
        await dessertObj.save();
        res.status(200).json({success: true, message: "Data Added", dessertObj});
    } catch (error) {
        console.error("Error Adding Data", error);
        res.status(500).json({success: false, message: "Internel Server Erro"});
    }
}

module.exports = Add;