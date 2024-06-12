const {StageDimention} = require('../../../Model/decore/Decor');

const Add = async(req, res) => {
    const { name, cost } = req.body;
    if(!name || !cost){
        return res.status(400).json({status: 400, message: "Required Field is missing"});
    }
    try {
        const dimention = new StageDimention({
            name,
            cost
        });

        await dimention.save();
        res.status(200).json({status: 200, message: "Stage Dimention Added", dimention})
    } catch (error) {
        console.error("Error Adding Stage Dimentions", error);
        res.status(500).json({message: "internal server error"});
    }
}

module.exports = Add;