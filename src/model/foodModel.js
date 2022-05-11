//qntidade de ração, nome e preço
const mongoose = require("mongoose");
const { totalAmount, totalPrice } = require("../controller/foodController");

const FoodSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },

//ver sobre o usuário inserir a data
},
{
  timestamps: true,

});

module.exports = mongoose.model("Food", FoodSchema);
