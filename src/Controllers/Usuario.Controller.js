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

exports.getAllUsuario = (req, res) => {
  usuarioModel.getAllUsuario((err, Usuario) => {
    console.log("here");

    console.log("Usuarios", Usuario);
    res.send(Usuario);
  });
};
