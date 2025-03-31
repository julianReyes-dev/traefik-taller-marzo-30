const express = require('express');
const os = require('os');
const app = express();

app.get('/backup', (req, res) => {
  res.send(`⚠️ SERVIDOR DE RESPALDO ACTIVADO - ${os.hostname()}\n[${new Date().toISOString()}]`);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(3003, () => console.log('API de Respaldo escuchando en puerto 3003'));
