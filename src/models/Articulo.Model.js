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


Articulo.get = (result) => {
    db.query('SELECT * FROM Articulo', (err, res)=>{
        if(err){
            console.log("Error while fetching all items", err);
            result(null, err);
        }else{
            console.log('Employees fetched succesfully');
            result(null, res);
        }

    })
}

module.exports = Articulo;
