const {DiningOption} = require('../../../Model/Others/Others');

const Update = async(req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const diningImage = req.files['diningImage'];
    try {
        const diningObj = await DiningOption.findById(id);
        if(!diningObj){
            res.status(400).json({status: 400, message: "Data not found"});
        }
        if(name) diningObj.name = name;
        if(diningImage){
            diningObj.diningImageName = diningImage[0].originalname,
            diningObj.diningImagePath = diningImage[0].path
        }
        await diningObj.save();
        res.status(200).json({status: 200, message: "Data Updated", diningObj});
    } catch (error) {
        console.error("Error Updating Data", error);
        res.status(500).json({status: 500, message: "Internal Server Error"});
    }
}

module.exports = Update;