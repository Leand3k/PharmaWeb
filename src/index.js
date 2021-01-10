const express = require("express");

const app = express();

const port = process.env.RDS_PORT;

const articuloRoutes = require('./Routes/articulo.routes');
const usuarioRoutes = require('./Routes/Usuario.routes');

app.get('/', (req, res) =>{
  res.send('hello world');
});

app.use('/api/v1/Articulo', articuloRoutes);
app.use('/api/v1/Usuario', usuarioRoutes);
app.listen(3000, () => console.log(`Server running on port ${3000}`));
