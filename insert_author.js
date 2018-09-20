var insert_author = function(){
    var i;
    var randomString = require('randomstring');
    for (i=0;i<30;i++){
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
    var authorData = new author({id:ide, name :fullname, email: mail });
    author.save(authorData);
    }
}
