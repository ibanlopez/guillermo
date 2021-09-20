const express = require('express');
const AmpOptimizerMiddleware = require('@ampproject/toolbox-optimizer-express');
const path = require('path');

const app = express();

app.use(AmpOptimizerMiddleware.create());

const staticMiddleware = express.static(path.join(__dirname, '/public'));
app.use(staticMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor está escuchando en puerto ${port}...`);
});
