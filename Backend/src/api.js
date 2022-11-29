const express = require('express');
const routers = require('./routes/index');

const app = express();

app.use(express.json());
app.use(routers.userRoute);

module.exports = app;