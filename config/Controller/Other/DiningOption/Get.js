const {DiningOption} = require('../../../Model/Others/Others');

const Get = async(req, res) => {
    const {name, cost} = req.query;
    try {
        let diningObj;
        let query = {};
        if(name) query.name = {$regex: `^${name}`, Option: 'i'};
        if(cost) query.cost = cost;
        // if(uId) query.uId = uId;
        if(Object.keys(query).length > 0){
            diningObj = await DiningOption.find(query);
        }else{
            diningObj = await DiningOption.find();
            
        }
        if(diningObj.length > 0){
            res.status(200).json({status: 200, message: "Data found", diningObj});
        }else{
            res.status(400).json({status: 400, message: "Error Geting Data"});
        }
    } catch (error) {
        console.error("Error Geting Data", error);
        res.status(500).json({status: 500, message: "Internal Server Error"});
    }
}

module.exports = Get;