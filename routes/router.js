var express = require('express');
var router = express.Router();
var author = require('../models/author');
var controller = require('../controller/author_controller')
var check_auth = require('./check_auth')
var route = function(app){
    app.get('/author', check_auth, controller.validate_author);
}
module.exports.route = route;

