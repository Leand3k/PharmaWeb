const app = require('./src/index.js');
const port = process.env.PORT;

// Server
app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});