const db = require("../server");

const Articulo = function(cantidad, idTipo, nombre, precio) {
    this.Cantidad = cantidad;
    this.IdTipoArticulo = idTipo;
    this.Nombre = nombre;
    this.Precio = precio;
}

Articulo.create = (newArticulo, result) => {
    let query = "call AgregarArticulo("+ newArticulo.Cantidad + "," + newArticulo.IdTipoArticulo + ",'" + newArticulo.Nombre + "'," + newArticulo.Precio + ");";
    db.query(query, true, (err, res) => {
        if(err) {   
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Articulo creado exitosamente");
    });    
}
module.exports = Articulo;
