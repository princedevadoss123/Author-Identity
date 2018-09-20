var author = require('../models/author.js');

var validate_author = function(req,res){
author.findOne({email : req.body.email},function(err,author){
    stat = false;
    if(err != null){
        console.log(err);
    }
    console.log(req.body.email);
    console.log(author);
    if(author != null){
        stat = true;
    }
    res.json({author : author});
});
}

var insert_author = function(){
    var i;
    var randomString = require('randomstring');
    for (i=0;i<30;i++){
        var fullname = randomString.generate({
          length = 10,
          charset : 'alphabetic',
          capitalization : 'lowercase',
          readable : true
        });
        var mail = fullname + "@gmail.com"
        var ide = "2018a00";
        if(i<10){
        ide += '0' + i;
        }
        else{
        ide += i;
        }
    var authorData = new author({id:ide, name :fullname, email: mail });
    author.save(authorData);
    }
}
module.exports.validate_author = validate_author ;
module.exports.insert_author = insert_author;
