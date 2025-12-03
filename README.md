# Sistema de Validación de Cédula de Identidad

Sistema completo de validación de cédulas dominicanas usando el algoritmo de **Módulo 10**. Incluye servicio web REST, interfaz web interactiva y clientes de prueba.

---

## 📋 Características

- ✅ Validación de cédulas usando algoritmo Módulo 10
- 🌐 API REST completa con múltiples endpoints
- 💻 Interfaz web moderna y responsive
- 🐍 Cliente de prueba en Python
- 🧪 Suite de pruebas automatizadas
- 📚 Documentación completa del API

---

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 14 o superior
- npm o yarn
- Python 3.7+ (opcional, para cliente Python)

### Instalación

1. Clonar o descargar el proyecto

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor:
```bash
npm start
```

4. Abrir en el navegador:
```
http://localhost:3000
```

Para la interfaz web, abrir el archivo `index.html` directamente en el navegador.

---

## 📁 Estructura del Proyecto

```
proyecto-validacion-cedula/
├── server.js              # Servidor principal Express
├── validator.js           # Lógica del algoritmo Módulo 10
├── routes/
│   └── validacion.js      # Rutas del API
├── package.json           # Dependencias del proyecto
├── test.js                # Pruebas automatizadas
├── cliente.py             # Cliente Python de prueba
├── index.html             # Interfaz web
├── styles.css             # Estilos de la interfaz
├── app.js                 # Lógica del frontend
├── API_DOCUMENTATION.md   # Documentación del API
└── README.md              # Este archivo
```

---

## 🔧 Uso del API

### Validar cédula (POST)

```bash
curl -X POST http://localhost:3000/api/validacion/cedula \
  -H "Content-Type: application/json" \
  -d '{"cedula": "00112345678"}'
```

### Validar cédula (GET)

```bash
curl http://localhost:3000/api/validacion/cedula/00112345678
```

### Obtener información del servicio

```bash
curl http://localhost:3000/api/validacion/info
```

---

## 🧪 Ejecutar Pruebas

Ejecutar el script de pruebas automatizadas:

```bash
node test.js
```

Esto ejecutará casos de prueba que validan:
- Cédulas válidas con diferentes formatos
- Cédulas inválidas (dígito verificador incorrecto)
- Validación de longitud
- Manejo de caracteres no numéricos

---

## 🐍 Cliente Python

Ejecutar el cliente interactivo de Python:

```bash
python cliente.py
```

Requisitos Python:
```bash
pip install requests
```

El cliente ofrece un menú con opciones para:
1. Validar una cédula individual
2. Validar múltiples cédulas en lote
3. Probar casos de ejemplo predefinidos

---

## 📖 Algoritmo Módulo 10

El algoritmo de validación sigue estos pasos:

1. **Extraer dígitos**: Se toman los primeros 10 dígitos de la cédula
2. **Multiplicar**: Cada dígito se multiplica alternadamente por 1 y 2
3. **Sumar**: Se suman todos los productos obtenidos
4. **Calcular módulo**: Se obtiene el residuo de dividir la suma entre 10
5. **Dígito verificador**: Es 10 menos el módulo (o 0 si el módulo es 0)

### Ejemplo:

Para la cédula `001-1234567-X`:

```
Posición:  0   1   2   3   4   5   6   7   8   9
Dígito:    0   0   1   1   2   3   4   5   6   7
Factor:    1   2   1   2   1   2   1   2   1   2
          ─────────────────────────────────────────
Producto:  0   0   1   2   2   6   4  10   6  14

Suma total: 45
Módulo 10: 45 % 10 = 5
Dígito verificador: 10 - 5 = 5
```

---

## 🌐 Interfaz Web

La interfaz web incluye:

- Formulario de entrada con formato automático
- Validación en tiempo real
- Visualización detallada de resultados
- Información sobre el algoritmo
- Diseño responsive para móviles
- Indicadores visuales (verde=válida, rojo=inválida)

---

## 🛠️ Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- CORS
- Body-parser

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API

### Testing
- JavaScript (Node.js)
- Python 3 con Requests

---

## 📝 API Reference

Ver documentación completa en [API_DOCUMENTATION.md](API_DOCUMENTATION.md)

### Endpoints disponibles:

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/validacion/cedula` | Validar cédula (body JSON) |
| GET | `/api/validacion/cedula/:cedula` | Validar cédula (URL param) |
| GET | `/api/validacion/info` | Información del servicio |

---

## 🔍 Formatos Aceptados

El sistema acepta cédulas en los siguientes formatos:

- **Con guiones**: `001-1234567-8`
- **Sin guiones**: `00112345678`
- **Con espacios**: `001 1234567 8`

Todos los caracteres no numéricos son eliminados automáticamente.

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

## 👤 Autor

Desarrollado como proyecto educativo para demostrar validación de cédulas usando algoritmos de módulo.

---

## 📞 Soporte

Para reportar problemas o sugerir mejoras, por favor abrir un issue en el repositorio del proyecto.

---

## ✨ Características Futuras

- [ ] Almacenamiento de historial de validaciones
- [ ] Estadísticas de uso
- [ ] API de validación en lote
- [ ] Integración con bases de datos de registros civiles
- [ ] Autenticación y rate limiting
- [ ] Despliegue en la nube (AWS/Azure/Heroku)