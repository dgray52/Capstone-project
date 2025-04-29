const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    category: {type: String, required: [true, 'category is required']},
    seller: {type: String, required: [true, ' seller name is required']},
    name: {type: String, required: [true, 'item name is required']},
    img: {type: String, default:'/images/books.png'},
    description: {type: String, required: [true, 'item description is required']},
    createdby:{type:Schema.Types.ObjectId, ref:'User'},
    active:{type:Boolean, default:true}
}
);

module.exports = mongoose.model('items', itemSchema);