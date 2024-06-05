const {CenterPiece} = require('../../../Model/decore/Decor')

const Get = async(req, res) => {
    const {name, cost, uId} = req.query;
    try {
        let centerPieceData;
        let query = {};
        if(name) query.name = {$regex: `^${name}`, Option: 'i'};
        if(cost) query.cost = cost;
        if(uId) query.uId = uId;
        
        if(Object.keys(query).length > 0){
            centerPieceData = await CenterPiece.find(query);
        }else{
            centerPieceData = await CenterPiece.find()
        }
        if(centerPieceData.length > 0){
            res.status(200).json({status: 200, message: "Data Get", centerPieceData});
        }else {
            res.status(400).json({status: 400, message: "No Data Found"});
        }
    } catch (error) {
        console.error("Error Geting Data", error);
        res.status(500).json({status: 500, message: "Internal Server Error"})
    }
};

module.exports = Get;