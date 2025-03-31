const express = require('express');
const os = require('os');
const app = express();
let isHealthy = true; // Variable para controlar health check

// Simular fallos después de 5 peticiones
app.get('/basic', (req, res) => {
  if (req.headers['x-force-fail'] || Math.random() < 0.3) { // 30% de probabilidad de fallo
    return res.status(500).send('Error simulado - Alta carga');
  }
  res.send(`API Básico - Contenedor: ${os.hostname()}\nInstancia principal`);
});

// Health check controlable
app.get('/health', (req, res) => {
  if (isHealthy) {
    res.status(200).send('OK');
  } else {
    res.status(500).send('Service Unavailable');
  }
});

app.listen(3000, () => console.log('API Básico escuchando en puerto 3000'));
