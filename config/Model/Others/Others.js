const mongoose = require('mongoose');

const diningOptionSchema = new mongoose.Schema({
    name: {type: String, required: true},
    diningImageName: {type: String, required: true},
    diningImagePath: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
});

const cutlerySchema = new mongoose.Schema({
    name: {type: String, required: true},
    cutleryImageName: {type: String, required: true},
    cutleryImagePath: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

const soundSchema = new mongoose.Schema({
    name: {type: String, required: true},
    cost: {type: String, required: true},
    soundImageName: {type: String, required: true},
    soundImagePath: {type: String, required: true},
    uId: {type: String, default: 'ss'}
})

const DiningOption = mongoose.model("DiningOption", diningOptionSchema);
const Cutlery = mongoose.model("Cutlery", cutlerySchema);
const Sound = mongoose.model("Sound", soundSchema);

module.exports = {
    DiningOption,
    Cutlery,
    Sound
};