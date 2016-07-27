'use strict';

const express = require('express');
const app = express();
const router = require('./route/route');
// sconst jsonParser = require('body-parser').json();

// app.use('/api', router);

app.post('/somejson', jsonParser, (req, res) => {
  res.send(req.body);
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send(err.message);
  next();
});

app.listen(3000, () => console.log('Server up on 3000!! '));
