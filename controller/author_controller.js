var author = require('../models/author.js');

var validate_author = function(req,res){
author.findOne({email : req.query.email},function(err,author){
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

module.exports.validate_author = validate_author ;
