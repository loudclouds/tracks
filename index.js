var express = require('express');
var data = require('./data.json');
var app = express();

app.get('/', (req, res) => res.send(data));
app.listen(3000, () => console.log('listening on port 3000'));
