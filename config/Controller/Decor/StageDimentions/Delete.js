const {StageDimention} = require('../../../Model/decore/Decor');

const Delete = async(req, res) => {
    const {id} = req.params
    try {
        const stageDelete = await StageDimention.findById(id);
        if(!stageDelete){
            return res.status(400).json({status: 400, message: "Stage not found"});
        }else{
            await StageDimention.findByIdAndDelete(id)
            res.status(200).json({status: 200, message: "Data Deleted", stageDelete});
        }
    } catch (error) {
        console.error("Error Deleting Data", error);
        res.status(500).json({status: 500, message: "nternal error"});
    }
};

module.exports = Delete;