const express = require('express');
const { PORT } = require('../src/config/server.config');
const app = express();
const bodyParser = require('body-parser');
const BaseError = require('./errors/Base.error');
const apiRouter = require('./routes/index');
const errorHandler = require('./utils/errorHandler');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.get('/ping', (req, res) => {
  return res.json({ Status: 'Server is Alive' });
});
app.use('/api', apiRouter);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
