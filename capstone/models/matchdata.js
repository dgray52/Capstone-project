const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    sport: {type: String, required: [true, 'sport is required']},
    home: {type: String, required: [true, 'home team is required']},
    away: {type: String, required: [true, 'away team is required']},
    img: {type: String, default:'/images/books.png'},
    location: {type: String, required: [true, 'location is required']}
}
);
//model name is User
module.exports = mongoose.model('games', gameSchema);