const express = require("express");
var db = require("../server")
const router = express.Router();

const articuloController = require('../Controllers/articulo.controller');

//router.get("/", articuloController.getArticulos);
router.post("/", articuloController.create);

module.exports = router;