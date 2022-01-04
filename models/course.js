const mongoose = require('mongoose');
const courseSchema = mongoose.Schema({
    courseID: { type: String},
    courseName: { type: String},
    deptID: { type: String},
    semesterNo: { type: String}
<<<<<<< HEAD
        
=======
        demotest
>>>>>>> 1b9533a4a99bdf7423966b8cc5521a4262477135
}) 

module.exports = mongoose.model('Course_Table', courseSchema);

