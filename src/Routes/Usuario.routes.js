const express = require("express");
const router = express.Router();

const usuarioController = require("../Controllers/Usuario.Controller");

router.get("/Usuario", usuarioController.getUserById);

module.exports = router;