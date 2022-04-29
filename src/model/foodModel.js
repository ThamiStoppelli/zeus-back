//qntidade de ração, nome e preço
const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: false,
  },

  description: {
    type: String,
    required: false,
  },

  // created_at: { 
  //   type: Date, 
  //   required: true, 
  //   default: Date.now 
  // }

  //ver sobre o usuário inserir a data
},
{
  timestamps: true

  //https://stackoverflow.com/questions/12669615/add-created-at-and-updated-at-fields-to-mongoose-schemas
});

module.exports = mongoose.model("Food", FoodSchema);
