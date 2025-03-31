const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    sport: {type: String, required: [true, 'sport is required']},
    home: {type: String, required: [true, 'home team is required']},
    away: {type: String, required: [true, 'away team is required']},
    img: {type: String, required: [true, 'img is required']},
    location: {type: String, required: [true, 'location is required']}
}
);

module.exports = mongoose.model('games', gameSchema);