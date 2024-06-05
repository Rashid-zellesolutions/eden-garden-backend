const {Cutlery} = require('../../../Model/Others/Others');

const Get = async(req, res) => {
    const {name, cost, uId} = req.query
    try {
        let cutleryObj;
        let query = {};
        if(name) query.name = {$regex: `^${name}`, Option: 'i'};
        if(cost) query.cost = cost;
        if(uId) query.uId = uId;
        if(Object.keys(query).length > 0){
            cutleryObj = await Cutlery.find(query);
        }else{
            cutleryObj = await Cutlery.find();
            
        }
        if(cutleryObj.length > 0){
            res.status(200).json({status: 200, message: "Data Get", cutleryObj});
        }else{
            res.status(400).json({status: 400, message: "Error Geting Data"});
        }
    } catch (error) {
        console.error("Error Geting Data", error);
        res.status(500).json({status: 500, message: "Internal Server Error"});
    }
}

module.exports = Get;