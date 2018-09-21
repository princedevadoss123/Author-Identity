var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Author = new Schema({
    author_id : {type : String, required : true },
    name : {type : String, required : true, max : 30},
    email : {type : String, required : true}
});

module.exports = mongoose.model('Author', Author);

