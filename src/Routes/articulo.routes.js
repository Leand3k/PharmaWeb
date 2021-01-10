const express = require('express');
const router = express.Router();

const articuloController = require('../Controllers/articulo.controller');

router.get('/', articuloController.getArticulos);

module.exports = router;