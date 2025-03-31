const express = require('express');
const os = require('os');
const app = express();

app.get('/admin', (req, res) => {
  res.send(`API Admin - Contenedor: ${os.hostname()}\nIP del cliente: ${req.ip}\nUsuario autenticado: ${req.headers['authorization'] ? 'Sí' : 'No'}`);
});

app.listen(3002, () => console.log('API Admin escuchando en puerto 3002'));
