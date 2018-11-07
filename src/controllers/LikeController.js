const Tweet = require('../models/Tweet');

module.exports = {

    async store(req, res) {
        const tweet = await Tweet.findById(req.params.id);

        // pegar oq o twiter tem de likes e mais 
        tweet.set({ likes: tweet.likes + 1 });

       // agora vou salvar
       await tweet.save();

       req.io.emit('like', tweet);

       return res.json(tweet);


    },
};