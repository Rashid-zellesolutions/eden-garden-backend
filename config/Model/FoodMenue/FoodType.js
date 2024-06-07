
const mongoose = require('mongoose');

const FoodTypeSchema = new mongoose.Schema({
    foodType: {type: String, required: true},
    value: {type: String},
    packages: [
        {
            name: {type: String, },
            appetizers: { type: Object, },
            mainEntries: { type: Object, },
            desserts: { type: Object,  },
            teaCoffe: { type: Object,},
            juicesDrinks: { type: Object,  }
        }
    ]
})

const FoodType = mongoose.model("FoodType", FoodTypeSchema);
module.exports = FoodType;
