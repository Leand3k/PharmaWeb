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
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacio!",
    });
  }
  const nuevoUsuario = new Usuario(
    req.body.Correo,
    req.body.Contraseña,
    req.body.Nombre,
    req.body.Direccion,
    req.body.NumeroTelefono,
    req.body.Apellido,
    req.body.Cedula,
    req.body.FechaNacimiento
  );
  Usuario.Crear(nuevoUsuario, (err, data) => {
    if (err){
      res.status(500).send({
        message:
           err.message || "Ocurrio un Error al crear el usuario."
       });
       console.log(err);
    } else {
      res.send(data);
    }
  });
};

exports.getAllUsuario = (req, res) => {
  usuarioModel.getAllUsuario((err, Usuario) => {
    console.log("here");

    console.log("Usuarios", Usuario);
    res.send(Usuario);
  });
};
