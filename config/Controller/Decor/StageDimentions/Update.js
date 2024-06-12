const {StageDimention} = require('../../../Model/decore/Decor');

const Update = async(req, res) => {
    const {id} = req.params;
    const { name, cost } = req.body;
    try {
        const stageDimention = await StageDimention.findById(id);
        if(!stageDimention){
            return res.status(400).json({status: 400, message: "Stage Dimention not found"});
        }
        if(name) stageDimention.name = name;
        if(cost) stageDimention.cost = cost;
        await stageDimention.save();
        res.status(200).json({status: 200, message: "Stage Dimention updated", stageDimention})
    } catch (error) {
        console.error("Error updating Stage Dimentions:", error);
        res.status(500).json({message: "Internal Server Error", error: error});
    }
}

module.exports = Update;