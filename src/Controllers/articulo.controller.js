const Articulo = require("../models/Articulo.Model");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    const articulo = new Articulo({
      Cantidad: req.body.Cantidad,
      IdArticulo: req.body.IdArticulo,
      IdTipoArticulo: req.body.IdTipoArticulo,
      Nombre: req.body.Nombre,
      Precio: req.body.Precio
    });
  
    Articulo.create(articulo, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocurrio un Error al crear un Articulo."
        });
      else res.send(data);
    });
  };
/*const getArticulos = (req, res) => {
    console.log('prueba');
}
*/
//module.exports = {getArticulos};