const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    category: {type: String, required: [true, 'category is required']},
    seller: {type: String, required: [true, ' seller name is required']},
    item: {type: String, required: [true, 'itme name is required']},
    img: {type: String, default:'/images/books.png'},
    description: {type: String, required: [true, 'item description is required']}
}
);
//model name is User
module.exports = mongoose.model('items', itemSchema);