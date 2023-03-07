const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

const testRoutes = require('./routes/test.routes');
testRoutes(app);

app.listen(port, () => {
    console.log(`Servidor corriendo en pueto ${port}`);
});

module.exports = app;
