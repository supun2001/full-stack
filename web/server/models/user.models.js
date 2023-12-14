const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String, required: true },
    contact: { type: String, required: true },
    address: { type: String, required: true },
    postlID: { type: String, required: true }
}, {
    versionKey: false
});

const User = mongoose.model('users', userSchema);
module.exports = User;
