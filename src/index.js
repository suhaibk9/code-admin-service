const express = require('express');
const { PORT } = require('../src/config/server.config');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());       
app.get('/ping', (req, res) => {
  return res.json({ Status: 'Server is Alive' });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});