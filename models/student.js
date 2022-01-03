const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    studentID: { type: String},
    firstName: { type: String},
    lastName: { type: String},
    address: { type: String},
    dob: { type: String},
    gender: { type: String},
    deptID: { type: String},
    status: { type: String},
    semester: { type: String},
    yoj: { type: String}

}) 

module.exports = mongoose.model('Student_Master', studentSchema);

