const express = require("express");
var db = require("../server")
const router = express.Router();

const farmaciaController = require("../Controllers/Farmacia.Controller");

router.post('/', farmaciaController.AgregarFarmacia);

module.exports = router;