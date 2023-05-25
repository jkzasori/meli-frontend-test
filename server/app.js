const express = require('express');
const createError = require("http-errors");
const logger = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

// Configuración de middleware
app.set("env", process.env.ENVIROMENT_MODE || "dev");
app.use(logger(app.get("env")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(compression());

const allowedDomain =  (process.env.CORS_ALLOWED_DOMAIN || "http://localhost:3003");

// Permite CORS para sólo el dominio donde corre la app frontend.
const cors = require('cors');

app.use(cors({
  origin: allowedDomain,
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept"
}));

const apiRouter = require("./routes");
app.use("/api", apiRouter);

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Welcome to Meli API!');
});

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  next(createError(404));
});

// Manejo de errores
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

module.exports = app;
