var express = require('express');
var cors = require('cors');
var data = require('./data.json');
var app = express();

var port = process.env.PORT || 3000;

app.use(cors());
app.get('/', (req, res) => res.send(data));
app.listen(port, () => console.log(`listening on port ${port}`));
