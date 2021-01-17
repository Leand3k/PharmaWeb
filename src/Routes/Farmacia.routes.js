const express = require("express");
var db = require("../server")
const router = express.Router();

const farmaciaController = require("../Controllers/Farmacia.Controller");

router.post('/CrearF', farmaciaController.AgregarFarmacia);
router.get("/get-all", farmaciaController.getFarmacia);

module.exports = router;