require('dotenv').config();
const mariadb = require('mariadb');
const logger = require('../logger/loggerDb');

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: 20
});

pool.getConnection()
  .then(connection => {
    logger.info('Conexión a la base de datos establecida satisfactoriamente'); // Reemplaza console.log con logger.info
    connection.release();
  })
  .catch(err => {
    logger.error('Error al conectar a la base de datos:', err); // Reemplaza console.error con logger.error
  });

module.exports = pool;
