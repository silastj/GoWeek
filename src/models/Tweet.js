//importando o mongosse
const mongoose = require('mongoose');

// aqui eu crie as tabela  e colunas e campos 
const TweetSchema = new mongoose.Schema({
    author: String,
    content: String,
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});
// se outro arquivo importa a gente vai devolver abaixo
module.exports = mongoose.model("Tweet", TweetSchema);