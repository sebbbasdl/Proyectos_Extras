const express = require('express');
const cors = require('cors'); // Importa el módulo 'cors'
const app = express();
const port = 3000;

// Usar el middleware cors para habilitar CORS
app.use(cors());

// Simulación de una base de datos en memoria
const database = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Ruta para obtener todos los elementos de la base de datos
app.get('/api/data', (req, res) => {
  res.json(database);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
