const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const port = process.env.PORT || 4444;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port);