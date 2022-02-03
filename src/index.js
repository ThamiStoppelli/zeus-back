const express = require("express");
const morgan = require("morgan");
const connectDB = require("./db/db");

const app = express();

connectDB();

app.use(express.json({ limit:"100mb" }))
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use(morgan("dev"))
app.all("*", require("./routes/index"))

app.get("/", (req, res) => {
    return res.send("OK!");
});

app.listen(3000)