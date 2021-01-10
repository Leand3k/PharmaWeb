var dbcon = require('../Config/server')

//Obtener(get) Articulo
var Articulo = function Articulo(articulo){
    this.IdArticulo = articulo.IdArticulo;
    this.IdTipoArticulo = articulo.IdTipoArticulo;
    this.Nombre = articulo.Nombre;
    this.Cantidad = articulo.Cantidad;
    this.Precio = articulo.Precio;
}

//Obtener(get) todos los articulos
Articulo.GetArticlesList = (result) =>{
    dbcon.query('SELECT * from Articulo', (err, res) =>{
        if(err){
            console.log('Error en conseguir la lista de articulos');
            result(null, err)
        }else{
            console.log('Lista de articulos obtenida exitosamente');
            result(null, res)
        }
    })
}
module.exports = Articulo;