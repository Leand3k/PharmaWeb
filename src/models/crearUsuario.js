const { request } = require("express");
const connection = require("../server");
const db = require("../server");

var Usuario = function Usuario(usuario) {
  this.Contraseña = usuario.Contraseña;
  this.Correo = usuario.Correo;
  this.Direccion = usuario.Direccion;
  this.FechaRegistro = new Date();
  this.IdTipoUsuario = usuario.IdTipoUsuario;
  this.IdUsuario = usuario.IdUsuario;
  this.Nombre = usuario.Nombre;
  this.NumeroTelefono = usuario.NumeroTelefono;
  this.Apellido = usuario.Apellido;
  this.Cedula = usuario.Cedula;
  this.FechaNacimiento = usuario.FechaNacimiento;
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
  // nuevoUsuario.Contraseña = "0";
  // nuevoUsuario.Nombre = "0";
  // nuevoUsuario.Direccion = "a";
  // nuevoUsuario.NumeroTelefono = "0";
  // nuevoUsuario.Apellido = "lopez";
  // nuevoUsuario.Cedula = "0";
  nuevoUsuario.FechaNacimiento = Date.now();

  connection.query(`CALL AgregarUsuario(?,?,?,?,?,?,?,?)`, [
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
