const express = require("express");
const morgan = require("morgan");
const connectDB = require("./db/db");
const cors = require("cors");

const app = express();
const port = 5000;

connectDB();

app.use(cors());
app.options('*', cors());


app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use(morgan("dev"));
app.all("*", require("./routes/index"));

app.get("/", (req, res) => {
  return res.send("OK!");
});

app.listen(port, () => {console.log(`Server on http://localhost:${port}`)});

// Utilize um banco de dados;
// Recomendamos que utilize o banco MongoDB
// Crie um código back-end (Servidor/API).
// Recomendamos que utilize Node.js com as libs Express.js, Cors e Mongoose;