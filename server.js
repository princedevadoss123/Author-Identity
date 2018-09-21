var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routing = require('./routes/router.js');
var db = require('./config/db');
var controller =  require('./controller/author_controller.js');

const bearerToken = require('express-bearer-token');
const port = 3504;
var app = express();

app.use(bodyParser.json());
app.use(bearerToken());
app.listen(port);
mongoose.connect(db.url);
console.log(process.env.CARD_BEARER_TOKEN);
routing.route(app);
