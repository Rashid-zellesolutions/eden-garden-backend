const mongoose = require('mongoose');

// Appetizers Schema
const AppetizersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pacFor: {type: String, required: true},
    constant: {type: String, default: 'false'},
    cost: {type: String, required: true},
    appetizersImageName: {type: String, required: true},
    appetizersImagePath: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

// Main Entries Schema
const MainEntriesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pacFor: {type: String, required: true},
    constant: {type: String, default: 'false'},
    cost: {type: String, required: true},
    mainEntriesImageName: {type: String, required: true},
    mainEntriesImagePath: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

// Desserts Schema
const DessertsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pacFor: {type: String, required: true},
    constant: {type: String, default: 'false'},
    cost: {type: String, required: true},
    dessertsImageName: {type: String, required: true},
    dessertsImagePath: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

// TeaCoffe Schema
const teaCoffeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pacFor: {type: String, required: true},
    cost: {type: String, required: true},
    constant: {type: String, default: 'false'},
    teaCoffeImageName: {type: String, required: true},
    teaCoffeImagePath: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

// Juices And Drinks Schema
const juicesDrinksSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pacFor: {type: String, required: true},
    constant: {type: String, default: 'false'},
    cost: {type: String, required: true},
    juiceDrinkImageName: {type: String, required: true},
    juiceDrinkImagePath: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

const Appetizers = mongoose.model("Appetizers", AppetizersSchema)
const MainEntries = mongoose.model("MainEntries", MainEntriesSchema);
const Desserts = mongoose.model("Desserts", DessertsSchema);
const TeaCoffe = mongoose.model("TeaCoffe", teaCoffeSchema);
const JuiceDrinks = mongoose.model("JuiceDrinks", juicesDrinksSchema)

module.exports = {Appetizers, MainEntries, Desserts, TeaCoffe, JuiceDrinks};