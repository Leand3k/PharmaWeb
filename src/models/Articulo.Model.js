const db = require("../server");

const Articulo = function(articulo) {
    this.Cantidad = articulo.Cantidad;
    this.IdArticulo = articulo.IdArticulo;
    this.IdTipoArticulo = articulo.IdTipoArticulo;
    this.Nombre = articulo.Nombre;
    this.Precio = articulo.Precio;
}

Articulo.create = (newArticulo, result) => {
    db.query("INSERT INTO Articulo SET ?"), newArticulo, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Articulo creado: ", {id: res.insertId, ...newArticulo});
        result(null,{id:res.insertId, ...newArticulo});
    };    
}
module.exports = Articulo;