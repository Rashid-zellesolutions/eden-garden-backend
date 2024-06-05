const {Cutlery} = require('../../../Model/Others/Others');

const Add = async(req, res) => {
    const {name} = req.body;
    const cutleryImage = req.files['cutleryImage'];
    if(!name || !cutleryImage){
        res.status(400).json({status: 400, message: "Required fields are missing"});
    }
    try {
        const cutleryObj = Cutlery({
            name,
            cutleryImageName : cutleryImage[0].originalname,
            cutleryImagePath : cutleryImage[0].path
        });

        await cutleryObj.save();
        res.status(200).json({status: 200, message: "Data Added", cutleryObj});
    } catch (error) {
        console.error("Error Adding Data");
        res.status(500).json({status: 500, message: "Internal Server Error"});
    }
}

module.exports = Add;