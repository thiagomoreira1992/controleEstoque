const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.uds(cors());
app.use(require('./routes'));

app.listen(3333);