const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');

require('winston-mongodb');
const allowedTransports = [];
//Puttin on Console
allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.printf((log) => {
        return `${log.timestamp} [${log.level}]: ${log.message}`;
      })
    ),
  })
);
//Putting in MongoDB
allowedTransports.push(
  new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs',
    fomat: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.printf((log) => {
        return `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`;
      })
    ),
  })
);
//Putting in File
allowedTransports.push(
  new winston.transports.File({
    filename: `app.log`,
  })
);
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.printf((log) => {
      return `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`;
    })
  ),
  transports: allowedTransports,
});
module.exports = logger;
