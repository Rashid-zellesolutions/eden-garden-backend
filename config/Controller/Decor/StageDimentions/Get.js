const { StageDimention} = require('../../../Model/decore/Decor');

const Get = async(req, res) => {
    const {name} = req.query;
    try {
        let stageDimention
        if(name){
            stageDimention = await StageDimention.find({name: { $regex: `^${name}`, Option: 'i' }});
            res.status(200).json({success: true, stageDimention});
        }else{
            stageDimention = await StageDimention.find();
            res.status(200).json({success: true, stageDimention});
        }
        if(!stageDimention){
            res.status(400).json({status: 400, message: "Arrangments not found"});
            return;
        }
    } catch (error) {
        res.status(500).json({message: "Error fetching data", error: error});
    }
}

module.exports = Get;