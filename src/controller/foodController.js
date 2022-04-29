const Food = require("../model/foodModel");

module.exports = {
  create: async (req, res) => {
    const { price, amount, name, description } = req.body;
    try {
      const createFood = await Food.create({ price, amount, name, description });

      return res.status(201).send(createFood);
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: "Failed to register" });
    }
  },
  getOne: async (req, res) => {
    const _id = req.params.id;
    try {
      const getOneFood = await Food.findById(_id);
      return res.status(200).send(getOneFood);
    } catch (err) {
      return res.status(400).send({ error: "Could not find" });
    }
  },
  list: async (req, res) => {
    try {
      const listFood = await Food.find();

      return res.status(200).send(listFood);
    } catch (err) {
      return res.status(400).send({ error: "Could not find" });
    }
  },

  update: async (req, res) => {
    const _id = req.params.id;
    try {
      const updateFood = await Food.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      return res.send(updateFood);
    } catch (err) {
      console.log(err);
      return res.status(404).send({ error: "ID not found, can't edit" });
    }
  },
//aaa
  delete: async (req, res) => {
    const _id = req.params.id;
    try {
      const deleteFood = await Food.findByIdAndDelete(_id);

      return res.status(200).send({ ok: "Successfully deleted" });
    } catch (err) {
      return res.status(400).send({ error: "Could not be deleted" });
    }
  },

  totalPrice: async (req, res) => {
    
  }
  
  //somar o gasto mensal com ração
  //totalAmount: somar quantidade total de ração mensal

  //ver sobre tipo de input da marca da ração
};
