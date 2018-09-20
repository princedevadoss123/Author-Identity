module.exports = function(request, response, next) {
    if(request.token === undefined) {
        console.log("undefined token");
        response.sendStatus(401);
    }
    else {
        if(request.token === process.env.CARD_BEARER_TOKEN) {
            console.log('Got Authorized');
            next();
        }
        else {
            console.log('Not Authorized');
           //response.status(403).send('Forbidden');
            response.sendStatus(403);
        }
    }
} 