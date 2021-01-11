const express = require("express");
var db = require("../server")
const router = express.Router();

const articuloController = require('../Controllers/articulo.controller');

//router.get("/", articuloController.getArticulos);
router.post("/", articuloController.create);
router.get("/get-all", articuloController.getItems);
router.delete("/delete", articuloController.delete);

module.exports = router;