var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Author = new Schema(
    
    {
    first_name : {type : String, required : true, max : 30},
    last_name : {type : String, required : true, max : 30},
    date_of_birth : {type : Date, required : true},
    email : {type : String, required : true}
});

module.exports = mongoose.model('Author', Author);

