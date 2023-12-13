const mongose = require('mongose');
const Schema = mongose.Schema;

const userSchema = new Schema({
    _id: { type: Schema.Type.OnjectId, auto: true },
    name: { type: String, required: true },
    contact: { type: String, required: true }
}, {
    versionkey: false
})

const user = mongose.model('users', userSchema);
module.exports = user;