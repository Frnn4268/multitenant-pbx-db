const { createLogger, transports, format } = require('winston');

const loggerDb = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/database.log' }) // Guarda logs en logs/database.log
  ]
});

module.exports = loggerDb;
