const express = require('express');

// variavel routes , express ROuter é o modulo de express
const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);


routes.post('/likes/:id', LikeController.store);

module.exports = routes;