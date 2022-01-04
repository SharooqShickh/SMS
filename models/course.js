const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    courseID: { type: String},
    courseName: { type: String},
    deptID: { type: String},
    semesterNo: { type: String}
        demotest
}) 

module.exports = mongoose.model('Course_Table', courseSchema);

