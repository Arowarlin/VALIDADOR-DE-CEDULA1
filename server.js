const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const validacionRoutes = require('./routes/validacion');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/validacion', validacionRoutes);

app.get('/', (req, res) => {
  res.json({
    mensaje: 'Servicio Web de Validación de Cédula',
    version: '1.0.0',
    endpoints: {
      validar: '/api/validacion/cedula',
      info: '/api/validacion/info'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});