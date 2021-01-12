const Farmacia = require("../models/Farmacia.Model");
var db = require("../server");

// exports.CrearFarmacia= (req, res) => {
//     farmaciaModel.callprocedure((err, Farmacia) =>{
//         if(error){
//             console.log("error conectando con el stored procedure", err);
//         }else{
//             console.log("Farmacia: ", Farmacia);
//             res.send(Farmacia);
//         }
//     })
// }

exports.AgregarFarmacia = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty"
        });
    }
   
console.log('req data', req.body);
const farmacia = new Farmacia(req.body.Correo, req.body.Direccion, req.body.Nombre, req.body.NombreLocal, req.body.Telefono);

Farmacia.CrearFarmacia(farmacia, (err, data) => {
    if(err)
    res.status(500).send({
        message:
        err.message || "Ocurrio un error al crear una farmacia."
    });
    else res.send(data);
    }); 
};


exports.getFarmacia = (req, res) => {
    Farmacia.get((err, farm) => {
        if(err)
        res.send(err);
        console.log('Farmacia', farm);
        res.send(farm)
        //res.json({succes: true, message: 'Farmacias extraidas exitosamente'});
    })
}
