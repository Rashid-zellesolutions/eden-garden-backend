const {DiningOption} = require('../../../Model/Others/Others');

const Add = async(req, res) => {
    const {name, cost} = req.body;
    const diningImage = req.files['diningImage'];
    if(!name || !cost || !diningImage){
        res.status(400).json({status: 400, message: "required fields are missing"});
    }
    try {
        const diningObj = DiningOption({
            name,
            cost,
            diningImageName: diningImage[0].originalname,
            diningImagePath: diningImage[0].path
        })

        await diningObj.save();
        res.status(200).json({status: 200, message: "Data Added", diningObj})
    } catch (error) {
        console.error("Error Adding Data", error);
        res.status(500).json({status: 500, message: "Internal Server Error"});
    }
}

module.exports = Add;