// listagem de tweets, criar novo tweet update e etc
const Tweet = require('../models/Tweet');

// requisicao e resposta 
module.exports = {
    async index(req, res){
        const tweets = await Tweet.find({}).sort('-createdAt');

        return res.json(tweets);
    },
    async store(req, res){
        const tweet = await Tweet.create(req.body);

       //iremos avisar a todos que um novo tweet foi criado
        req.io.emit('tweet', tweet);


        return res.json(tweet);

    }
};