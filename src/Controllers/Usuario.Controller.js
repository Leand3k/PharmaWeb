const usuarioModel = require("../models/crearUsuario");

const getUserById = (id, result) => {
    usuarioModel.GetUserById((err, usuario) => {
        console.log("Usuario por ID:");
        if(err){
            result.send(err);
        }
        else{
            console.log("Usuario", usuario);
            result.send(usuario);
        }
    });
}

module.exports = {getUserById}