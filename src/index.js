const express = require('express');
const { PORT } = require('../src/config/server.config');
const app = express();
const bodyParser = require('body-parser');
const BaseError = require('./errors/Base.error');
const apiRouter = require('./routes/index');
const mongoose = require('mongoose');
const { errorHandler } = require('./utils/index');
const connectToDB = require('./config/db.config');
const ProblemModel = require('../src/models/problem.model');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.get('/ping', (req, res) => {
  return res.json({ Status: 'Server is Alive' });
});
app.use('/api', apiRouter);
app.use(errorHandler);
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectToDB();
  console.log('Connected to DB');
});
