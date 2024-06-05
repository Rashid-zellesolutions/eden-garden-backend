const {SeatingArangments} = require('../../../Model/decore/Decor');

const Add = async(req, res) => {
    const {name} = req.body;
    const seatingImage = req.files['seatingImage'];
    if(!name || !seatingImage){
        res.status(400).json({status: 400, message: "required fields are missing"});
    }
    try {
        const seatingObj = SeatingArangments({
            name,
            seatingArrangmentsImageName: seatingImage[0].originalname,
            seatingArrangmentsImagePath: seatingImage[0].path
        })
        console.log(seatingObj);
        await seatingObj.save();
        res.status(200).json({status: 200, message: "Object Created", seatingObj})
    } catch (error) {
        console.error("Error Adding Data", error);
        res.status(500).json({status: 500, message: "Internal Server Error"});
    }
}

module.exports = Add;