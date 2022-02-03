//qntidade de ração, nome e preço
const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    name: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model("Data", DataSchema);