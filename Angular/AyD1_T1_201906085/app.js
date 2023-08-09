// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/data', (req, res) => {
  const data = {
    message: 'Sebastian Alejandro de Leon Tenaz',

  };
  res.json(data);
});

app.post('/api/endpoint', (req, res) => {
  const datos = req.body;

  // Acceder a los valores usando las claves (key1 y key2 en este caso)
  const valor1 = parseInt(datos.key1);
  const valor2 = parseInt(datos.key2);

  // Calcular la suma de los valores recibidos
  const suma = valor1 + valor2;

  // Responder al frontend con la suma
  res.json({ suma: suma });
});

app.listen(port, () => {
  console.log(`Servidor Node.js corriendo en http://localhost:${port}`);
});
