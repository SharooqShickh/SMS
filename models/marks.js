const mongoose = require('mongoose');
const marksSchema = mongoose.Schema({
    studentID: { type: String},
    deptID: { type: String},
    semester: { type: String},
    course1_ID: { type: String},
    marks1: { type: String},
    course2_ID: { type: String},
    marks2: { type: String},
    course3_ID: { type: String},
    examStatus: { type: String},
    marks3: { type: String},
    dateTaken: { type: String}

}) 

module.exports = mongoose.model('marks_Table', marksSchema);

