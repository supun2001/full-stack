const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    p_name: { type: String, required: true },
    p_price: { type: String, required: true },
    p_imgLink: { type: String, required: true },
    p_qunittiy: { type: String, required: true },
    p_desc: { type: String, required: true },
}, {
    versionKey: false
});

const Phones = mongoose.model('phones', phoneSchema);
module.exports = Phones;
