const {Sound} = require('../../../Model/Others/Others');

const Add = async(req, res) => {
    const {name, cost} = req.body;
    const soundImage = req.files['soundImage'];
    if(!name || !cost || !soundImage){
        res.status(400).json({status: 400, message: "Required Fields Are Missing"});
    }
    try {
        const soundObj = Sound({
            name,
            cost,
            soundImageName: soundImage[0].originalname,
            soundImagePath: soundImage[0].path
        })
        await soundObj.save();
        res.status(200).json({status: 200, message: "Data Added", soundObj});
    } catch (error) {
        console.error("Error Adding Data", error);
        res.status(500).json({status: 500, message: "Internal Server Error"});
    }
}

module.exports = Add;