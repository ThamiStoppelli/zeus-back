const mongoose = require("mongoose");

const connectDB =  async () => {
    try {
        // const db = await mongoose.connect("mongodb://localhost:27017/zeus", 
        
        const db = await mongoose.connect("mongodb+srv://admin:admin@zeus.lrjgn.mongodb.net/Zeus?authSource=admin&replicaSet=atlas-xyipc1-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", {

             useNewUrlParser: true,
             useUnifiedTopology: true,
         });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;