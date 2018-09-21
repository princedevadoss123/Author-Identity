var author = require('../models/author');
var mongoose = require('mongoose');
var db = require('../config/db');
const options = {
    useNewUrlParser: true,
    keepAlive: true, 
    connectTimeoutMS: 30000,
    reconnectTries: Number.MAX_VALUE
};
mongoose.connect(db.url, options, function(error) {
    if(error) {
        console.log("error");
    }
    else {
        console.log("mongoose connected");
        var i;
        var randomString = require('randomstring');
        for (i=0;i<30;i++){
            console.log(i);
            var fullname = randomString.generate({
                length : 10,
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
        var authorData = new author({ author_id : ide, name : fullname, email : mail });
        authorData.save(function(err) {
            if(err) {
                console.log("error");
            }
            else {
                console.log("Saved "+ (i+1) + " Entry");
            }
        });
        }
        console.log("Successfully inserted");
    }
})
