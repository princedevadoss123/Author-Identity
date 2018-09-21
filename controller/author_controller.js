var author = require('../models/author.js');

var validate_author = function(req,res){
author.findOne({author_id : req.query.id},function(err,author){
    var status = 'failure';
    if(err != null){
        console.log(err);
    }
    console.log(author);
    if(author != null){
        if(author.email == req.query.email){
        status = 'success';
        }
    }
    res.json({message : status});
});
}

module.exports.validate_author = validate_author ;
