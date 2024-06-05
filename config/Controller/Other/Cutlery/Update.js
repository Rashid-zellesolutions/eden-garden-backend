const {Cutlery} = require('../../../Model/Others/Others');

const Update = async(req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const cutleryImage = req.files['cutleryImage'];
    try {
        const cutleryObj = await Cutlery.findById(id);
        if(!cutleryObj){
            res.status(400).json({status: 400, message: "Data Not Found"});
        }
        if(name) cutleryObj.name = name;
        if(cutleryImage){
            cutleryObj.cutleryImageName = cutleryImage[0].originalname;
            cutleryObj.cutleryImagePath = cutleryImage[0].path;
        }
        await cutleryObj.save();
        res.status(200).json({status: 200, message: "Data Updated", cutleryObj});
    } catch (error) {
        console.error("Error Updating Data", error);
        res.status(500).json({status: 500, message: "Internal Server Error"});
    }
}

module.exports = Update;