const { request } = require("express");
const connection = require("../server");
const db = require("../server");

var Usuario = function(ucorreo, ucontraseña, udireccion, ufecharegistro, uidusuario, unombre,
   unumerotelefono, uapellido, ucedula, ufechanacimiento) {
  this.Correo = ucorreo;
  this.Contraseña = ucontraseña;
  this.Direccion = udireccion;
  this.FechaRegistro = ufecharegistro;
  this.IdUsuario = uidusuario;
  this.Nombre = unombre;
  this.NumeroTelefono = unumerotelefono;
  this.Apellido = uapellido;
  this.Cedula = ucedula;
  this.FechaNacimiento = ufechanacimiento;
};

// Usuario.GetUserById = (id, result) => {
//   const sql = `SELECT * FROM Usuario WHERE IdUsuario = ${id}`
//   db.query(sql, (err, res) => {
//     if(err) {
//       console.log(err);
//       result(err, null);
//     }
//     else if (res.length){
//       console.log("Usuario encontrado: ", res[0]);
//       result(null, res[0]);
//     }
//     else{
//       result({ kind: "not_found" }, null);
//     }
//   });
// }

Usuario.Crear = (nuevoUsuario, result) => {
  
  // nuevoUsuario.Correo = "a";
  //nuevoUsuario.Contraseña = "0";
  // nuevoUsuario.Nombre = "0";
  // nuevoUsuario.Direccion = "a";
  // nuevoUsuario.NumeroTelefono = "0";
  // nuevoUsuario.Apellido = "lopez";
  // nuevoUsuario.Cedula = "0";
  nuevoUsuario.FechaNacimiento = Date.now();

  connection.query("call AgregarUsuario(?,?,?,?,?,?,?,?)", [
  nuevoUsuario.Correo,
  nuevoUsuario.Contraseña,
  nuevoUsuario.Nombre,
  nuevoUsuario.Direccion,
  nuevoUsuario.NumeroTelefono,
  nuevoUsuario.Apellido,
  nuevoUsuario.Cedula,
  nuevoUsuario.FechaNacimiento], (err, res) => {
    if (err) {
      result("err:", err);
    } else {
      result("results:", res);
    }
  });
}

Usuario.getAllUsuario = (result) => {
  const sql = `SELECT * FROM Usuario`;

  db.query(sql, (err, res) => {
    if (err) {
      console.log("Hay un error.", err);
      result(null, err);
      return;
    } else {
      console.log("Usuarios encontrados: ");
      result(null, res);
    }
  });
};

module.exports = Usuario;
