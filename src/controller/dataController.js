const Data = require("../model/dataModel");

module.exports = {
    create: async (req, res) => {
        const { amount, price, name } = req.body;
        try {
            const create = await Data.create({ amount, price, name });

            return res.status(201).send({ create });
        } catch (err) {
            console.log(err)
            return res.status(400).send({ error: "Failed to register" });
        }
    },
    getOne: async (req, res) => {
        const _id = req.params.id
        try {
            const data = await Data.findById(_id);
            return res.status(200).send({ data })
        } catch (err) {
            return res.status(400).send({ error: "Could not find"});
        }
    },
    getMany: async (req, res) => {
        try {
            const data = await Data.find();

            return res.status(200).send({ data })
        } catch (err) {
            return res.status(400).send({ error: "Could not find"})
        }
    },
    // update: {

    // },
    delete: async (req, res) => {
        const _id = req.params.id
        try {
            const data = await Data.findByIdAndDelete(_id);
            
            return res.status(200).send("Successfully deleted")
        } catch (err) {
            return res.status(400).send({ error: "Could not be deleted"})
        }

    }
}