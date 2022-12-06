const express = require('express');
const routers = require('./routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routers.userRoute);
app.use(routers.transactionRoute);
app.use(routers.loginRoute)
app.use(routers.registerRoute);

module.exports = app;