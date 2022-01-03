const mongoose = require('mongoose');
const deptSchema = mongoose.Schema({
    deptID: { type: String},
    deptName: { type: String},
    maxIntake: { type: String},

}) 

module.exports = mongoose.model('deptID_Table', deptSchema);

