const Articulo = require("../models/Articulo.Model");

exports.create = (req, res) => {
    //Validate request
    if (!req.body) {
      res.status(400).send({
      message: "Content can not be empty!"
     });
    } 

   console.log('req data', req.body);
   const articulo = new Articulo(req.body.Cantidad, req.body.IdTipoArticulo, req.body.Nombre, req.body.Precio);
  
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