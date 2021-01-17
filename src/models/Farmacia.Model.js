const db = require("../server");
var Farmacia = function (correo, direccion, nombre, nombreLocal, telefono, contraseña) {
    this.NombreLocal = nombreLocal 
    this.Direccion = direccion;
    this.Nombre = nombre;
    this.Correo = correo;
    this.Telefono = telefono;
    this.Contraseña = contraseña;

  };

  Farmacia.CrearFarmacia = (newfarmacia,result) =>{
    let sql = "call AgregarFarmacia('" + newfarmacia.NombreLocal + "','" + newfarmacia.Direccion + "','" + newfarmacia.Nombre + "','" + newfarmacia.Correo + "','" + newfarmacia.Telefono + "','" + newfarmacia.Contraseña + "');";

    db.query(sql, true, (err, res) => {
      if(err){
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("se creo la farmacia");
    })
  }

  Farmacia.get = (result) => {
    db.query('SELECT * FROM Farmacia', (err, res) =>{
      if(err){
        console.log("error while getting the stores", err);
        result(null, err);
      }else{
        console.log('Farmacia fletched succesfully');
        result(null, res);
      }
      })
  }
  module.exports = Farmacia;