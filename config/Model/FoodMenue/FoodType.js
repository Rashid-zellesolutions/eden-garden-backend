const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const FoodType = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: String, required: true},
    packages: [
        {
            name: {type: String, required: true},
            appetizers: [ObjectId],
            mainEntries: [ObjectId],
            desserts: [ObjectId],
            teaCoffe: [ObjectId],
            juicesDrinks: [ObjectId]
        }
    ]
})