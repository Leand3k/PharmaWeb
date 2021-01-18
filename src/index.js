var db = require("../src/server");
const express = require("express");
const app = express();
const port = process.env.RDS_PORT;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

//routes
const articuloRoutes = require("./Routes/articulo.routes");
const usuarioRoutes = require("./Routes/Usuario.routes");
const farmaciaRoutes = require("./Routes/Farmacia.routes");

//parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse request data content type application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/articulo", articuloRoutes);
app.use("/usuario", usuarioRoutes);
app.use("/farmacia", farmaciaRoutes);
app.listen(process.env.PORT || 3000, () =>
  console.log(`Server running on port ${process.env.PORT || 3000}`)
);

module.exports = app;
