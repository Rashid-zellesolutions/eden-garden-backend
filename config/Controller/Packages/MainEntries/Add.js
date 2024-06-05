const {MainEntries} = require('../../../Model/FoodMenue/Packages');

const Add = async(req, res) => {
    const {name, pacFor, cost} = req.body;
    const mainEntriesImage = req.file['mainEntriesImage'];
    if(!name || !pacFor || !cost || !mainEntriesImage){
        res.status(404).json({success: false, message: "required fields are missing"})
    }
    try {
        const mainEntriesObj = MainEntries({
            name,
            pacFor,
            cost,
            mainEntriesImageName: mainEntriesImage[0].originalname,
            mainEntriesImagePath: mainEntriesImage[0].path
        });
        await mainEntriesObj.save();
        res.status(200).json({success: true, message: "Data Added", mainEntriesObj})
    } catch (error) {
        console.error("error Adding Data ", error);
        res.status(500).json({success: false, message: "nternel Server Error"});
    }
}

module.exports = Add;