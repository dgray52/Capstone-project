const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    offerer: {type:Schema.Types.ObjectId, ref:'User'},
    onItem: {type:Schema.Types.ObjectId, ref:'items'},
    Offer: {type: String, required:[true, 'cannot be empty']},
    acepted:{type:Number,enum:[1,2,3], default:1}
    // 1= pending, 2=accepted, 3=rejected 
});
module.exports = mongoose.model('offers',offerSchema);