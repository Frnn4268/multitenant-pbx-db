const express = require('express');
const dataRoutes = require('./routes/dataRoutes');
const logger = require('./logger/logger');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use('/api', dataRoutes);

app.listen(PORT, () => {
  logger.info(`Servidor corriendo en http://localhost:${PORT}`);
});
