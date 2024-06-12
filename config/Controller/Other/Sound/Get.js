const {Sound} = require('../../../Model/Others/Others');

const Get = async(req, res) => {
    const {name, cost} = req.query;
    try {
        let soundObj;
        let query = {};
        if(name) query.name = name;
        if(cost) query.cost = cost;
        // if(uId) query.uId = uId;

        if(Object.keys(query).length > 0){
            soundObj = await Sound.find(query);
        }else{
            soundObj = await Sound.find()
        }

        if(soundObj.length > 0){
            res.status(200).json({status: 200, message: "Data Found", soundObj});
        }else{
            res.status(400).json({status: 400, message: "Data not found"});
        }
    } catch (error) {
        console.error("Error Geting Data", error);
        res.status(500).json({status: 500, message: "Internal Server Error"});
    }
}

module.exports = Get;