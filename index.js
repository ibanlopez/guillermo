const express = require('express');
const path = require('path');

const app = express();
const AmpOptimizerMiddleware = require('@ampproject/toolbox-optimizer-express');

app.use(AmpOptimizerMiddleware.create());

const staticMiddleware = express.static(path.join(__dirname, '/public'));
app.use(staticMiddleware);

app.listen(5000, () => {
  console.log('Servidor está escuchando en puerto 5000...');
});
