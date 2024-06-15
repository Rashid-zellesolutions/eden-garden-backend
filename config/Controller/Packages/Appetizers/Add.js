const {Appetizers} = require('../../../Model/FoodMenue/Packages');

const Add = async(req, res) => {
    const {name, pacFor, cost} = req.body
    const appetizerImage = req.files['appetizerImage'];
    if(!name || !pacFor || !cost || !appetizerImage){
        res.status(400).json({success: false, message: "Required Fileds are missing"});
    }
    try {
        const customId = generateCustomId();
        const appetizerObj = Appetizers({
            name,
            pacFor,
            cost,
            appetizersImageName: appetizerImage[0].originalname,
            appetizersImagePath: appetizerImage[0].path
        });

        await appetizerObj.save();
        console.log(customId)
        // Convert _id to string format
        // savedAppetizer._id = savedAppetizer._id.toString();

        // await appetizerObj.save();
        // savedAppetizer.createdAt = savedAppetizer.createdAt.toISOString();
        res.status(200).json({success: true, message: "Data Upload", appetizerObj})
    } catch (error) {
        console.error("Error Adding Data", error);
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
}

function generateCustomId() {
    return Math.random().toString(36).substr(2, 9); // Example: generates a random alphanumeric string
}

module.exports = Add;