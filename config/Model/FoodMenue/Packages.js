const mongoose = require('mongoose');

const AppetizersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pacFor: {type: String, required: true},
    constant: {type: String, default: 'false'},
    cost: {type: String, required: true},
    appetizersImageName: {type: String, required: true},
    appetizersImagePath: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

const MainEntriesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pacFor: {type: String, required: true},
    constant: {type: String, default: 'false'},
    cost: {type: String, required: true},
    mainEntriesImageName: {type: String, required: true},
    mainEntriesImagePath: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

const DessertsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pacFor: {type: String, required: true},
    constant: {type: String, default: 'false'},
    cost: {type: String, required: true},
    dessertsImageName: {type: String, required: true},
    dessertsImagePath: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

const teaCoffeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pacFor: {type: String, required: true},
    cost: {type: String, required: true},
    constant: {type: String, default: 'false'},
    teaCoffeImageName: {type: String, required: true},
    teaCoffeImagePath: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

const juicesDrinksSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pacFor: {type: String, required: true},
    constant: {type: String, default: 'false'},
    cost: {type: String, required: true},
    juiceDrinkImageName: {type: String, required: true},
    juiceDrinkImagePath: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

// Midlewares to Update data in Food Type
AppetizersSchema.post('findOneAndUpdate', async function(doc){})

const Appetizers = mongoose.model("Appetizers", AppetizersSchema)
const MainEntries = mongoose.model("MainEntries", MainEntriesSchema);
const Desserts = mongoose.model("Desserts", DessertsSchema);
const TeaCoffe = mongoose.model("TeaCoffe", teaCoffeSchema);
const JuiceDrinks = mongoose.model("JuiceDrinks", juicesDrinksSchema)

module.exports = {Appetizers, MainEntries, Desserts, TeaCoffe, JuiceDrinks};