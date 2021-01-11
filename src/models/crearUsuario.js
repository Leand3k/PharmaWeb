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
