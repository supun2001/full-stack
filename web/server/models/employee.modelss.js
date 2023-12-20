const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    e_name: { type: String, required: true },
    e_num: { type: String, required: true },
    e_add: { type: String, required: true },
}, {
    versionKey: false
});

const Employees = mongoose.model('emplotees', employeeSchema);
module.exports = Employees;
