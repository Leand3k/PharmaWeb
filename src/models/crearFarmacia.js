const db = require("../server");
var Farmacia = function (correo, direccion, nombre, nombreLocal, telefono) {
    this.Correo = correo; 
    this.Direccion = direccion;
    this.Nombre = nombre;
    this.NombreLocal = nombreLocal;
    this.Telefono = telefono;

  };

  Farmacia.CrearFarmacia = (newfarmacia,result) =>{
    let sql = "call AgregarFarmacia('" + newfarmacia.Correo + "','" + newfarmacia.Direccion + "','" + newfarmacia.Nombre + "','" + newfarmacia.NombreLocal + "','" + newfarmacia.Telefono + "');";

    db.query(sql, true, (err, res) => {
      if(err){
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("se creo la farmacia");
    })
  }
  module.exports = Farmacia;