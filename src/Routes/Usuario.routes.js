const express = require("express");
var db = require("../server");
const router = express.Router();

const usuarioController = require("../controllers/Usuario.Controller");

router.post("/CrearU", usuarioController.Crear);
router.get("/", usuarioController.getAllUsuario);

module.exports = router;
