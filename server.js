var express = require('express');
var app = express();

const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/'));

app.listen(port, () => { console.log('process at : ' + port) });