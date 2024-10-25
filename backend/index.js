const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const dataRoutes = require('./routes/dataRoutes');
const logger = require('./logger/loggerServer');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(helmet());
app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // limita cada IP a 100 solicitudes por ventana de 15 minutos
});
app.use(limiter);

app.use(express.json());
app.use('/api', dataRoutes);

app.listen(PORT, () => {
  logger.info(`Servidor corriendo en http://localhost:${PORT}`);
});
