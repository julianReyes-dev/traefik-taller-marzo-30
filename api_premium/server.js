const express = require('express');
const os = require('os');
const app = express();

app.get('/premium', (req, res) => {
  res.send(`API Premium - Contenedor: ${os.hostname()}\nUsuario autenticado: ${req.headers['authorization'] ? 'Sí' : 'No'}`);
});

app.listen(3001, () => console.log('API Premium escuchando en puerto 3001'));
