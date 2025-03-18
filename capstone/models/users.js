const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: [true, 'user is required']},
    password: {type: String, rquired: [true, 'password is required']},
}
);
//model name is User
module.exports = mongoose.model('User', userSchema);

