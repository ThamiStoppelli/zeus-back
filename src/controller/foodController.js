const { query } = require("express");
const Food = require("../model/foodModel");
const moment = require('moment')


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

  delete: async (req, res) => {
    const _id = req.params.id;
    try {
      const deleteFood = await Food.findByIdAndDelete(_id);

      return res.status(200).send({ ok: "Successfully deleted" });
    } catch (err) {
      return res.status(400).send({ error: "Could not be deleted" });
    }
  },

  //preço total de ração
  totalPrice: async (req, res) => {
    try {
      const listFood = await Food.find();
      var priceItem;
      var total = 0;

      for(var i = 0; i < listFood.length; i++) {
        priceItem = listFood[i].price;
        total+=priceItem;
      }

      return res.status(200).send({ totalPrice: total });
    } catch (err) {
      return res.status(400).send({ error: "Could not find" });
    }
  },

  //quantidade total de ração
  totalAmount: async (req, res) => {
    try {
      const listFood = await Food.find();
      //usar operador sql
      var amountItem;
      var total = 0;
      //commit back
      for(var i = 0; i < listFood.length; i++) {
        amountItem = listFood[i].amount;
        total+=amountItem;
      }

      return res.status(200).send({ totalAmount: total });
    } catch (err) {
      return res.status(400).send({ error: "Could not find" });
    }
    //fazer filtro no front, mas posso fazer no back
  },

  //preço total mensal
  totalMonthlyPrice: async (req, res) => {
    const month = req.query.month
    const year = req.query.year
    const date = new Date()
    try {
      const listFood = await Food.find({
        "createdAt": {
          $gt: new Date(parseInt(year), parseInt(month)-1),
          $lt: new Date(parseInt(year), parseInt(month))
        }
      });
      // console.log(new Date(parseInt(year), parseInt(month)-1))
      // console.log(new Date(parseInt(year), parseInt(month)))
      let monthlyPrice = 0;
      for(var i = 0; i < listFood.length; i++){
        monthlyPrice += listFood[i].price;
      }
      return res.status(200).send({ totalMonthlyPrice: monthlyPrice });
    
    } catch (err) {
      return res.status(400).send({ error: "Could not add" });
    }
  },
  
  //quantidade total mensal
  totalMonthlyAmount: async (req, res) => {
    const month = req.query.month
    const year = req.query.year
    const date = new Date()
    try {
      const listFood = await Food.find({
        "createdAt": {
          $gt: new Date(parseInt(year), parseInt(month)-1),
          $lt: new Date(parseInt(year), parseInt(month))
        }
      });
      let monthlyAmount = 0;
      for(var i = 0; i < listFood.length; i++){
        monthlyAmount += listFood[i].amount;
      }
      return res.status(200).send({ totalMonthlyAmount: monthlyAmount });
    
    } catch (err) {
      console.log(err)
      return res.status(400).send({ error: "Could not add" });
    }
  },

};
