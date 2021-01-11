const Usuario = require("../models/crearUsuario");
const usuarioModel = require("../models/crearUsuario");
var db = require("../server");

// const getUserById = (id, result) => {
//     usuarioModel.GetUserById((err, usuario) => {
//         console.log("Usuario por ID:");
//         if(err){
//             result.send(err);
//         }
//         else{
//             console.log("Usuario", usuario);
//             result.send(usuario);
//         }
//     });
// }

// module.exports = {getUserById}

exports.Crear = (req, res) => {
  if (!req.params) {
    res.status(400).send({
      message: "El contenido no puede estar vacio!",
    });
  }
  const nuevoUsuario = new Usuario({
    Correo: req.params.Correo,
    Contraseña: req.params.Contraseña,
    Nombre: req.params.Nombre,
    Direccion: req.params.Direccion,
    NumeroTelefonico: req.params.NumeroTelefonico,
    Apellido: req.params.Apellido,
    Cedula: req.params.Cedula,
    FechaNacimiento: req.params.FechaNacimiento,
  });
  Usuario.Crear(nuevoUsuario, (err, res) => {
    if (err){
      console.log(err);
    } else{
      console.log("ok!");
    }
  });

}

exports.getAllUsuario = (req, res) => {
  usuarioModel.getAllUsuario((err, Usuario) => {
    console.log("here");

    console.log("Usuarios", Usuario);
    res.send(Usuario);
  });
};
