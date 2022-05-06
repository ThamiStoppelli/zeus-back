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
  //https://stackoverflow.com/questions/12669615/add-created-at-and-updated-at-fields-to-mongoose-schemas
});

module.exports = mongoose.model("Food", FoodSchema);
