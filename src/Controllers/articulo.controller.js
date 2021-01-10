const ArticuloModel = require('../models/obtenerArticulo')

const getArticulos = (req, res) => {
    ArticuloModel.GetArticlesList((err, articuloos) =>{
        console.log('prueba2');
        if(err)
        res.send(err);
        console.log('articulos', articuloos);
        res.send(articuloos);
    })
}

module.exports = {getArticulos};