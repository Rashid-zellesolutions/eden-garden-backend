const {MainEntries} = require('../../../Model/FoodMenue/Packages');

const Update = async(req, res) => {
    const {id} = req.params;
    const {name, pacFor, cost} = req.body;
    const mainEntriesImage = req.files['mainEntriesImage'];
    try {
        const mainEntriesObj = await MainEntries.findById(id);
        if(!mainEntriesObj){
            res.status(404).json({success: false, message: "Data not Found"});
        }
        if(name) mainEntriesObj.name = name;
        if(pacFor) mainEntriesObj.pacFor = pacFor;
        if(cost) mainEntriesObj.cost = cost;
        if(mainEntriesImage){
            mainEntriesObj.mainEntriesImageName = mainEntriesImage[0].originalname;
            mainEntriesObj.mainEntriesImagePath = mainEntriesImage[0].path
        }
        console.log(mainEntriesImage);
        console.log(mainEntriesObj)
        await mainEntriesObj.save();
        res.status(200).json({success: true, message: "Data Updated", mainEntriesObj});
    } catch (error) {
        console.error("Error Updating Data", error);
        res.status(500).json({success: false, message: "Internel Server Error"});
    }
}

module.exports = Update;