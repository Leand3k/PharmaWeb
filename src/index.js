const express = require("express");

const app = express();

const port = process.env.RDS_PORT;

const articlesRoutes = require('./Routes/articulo.routes');

app.get('/', (req, res) =>{
  res.send('hello world');
});

app.use('/api/v1/Articulo', articlesRoutes);
app.listen(3000, () => console.log(`Server running on port ${3000}`));
