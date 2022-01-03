const express = require("express");
var mongoose = require('mongoose');
const router = express.Router();
var courseModel = require('../models/course.js');
const { request } = require("express");

router.post('/courseAdd', (request, response) => {
   console.log("request", request);
   const user = new courseModel ({
       courseID: request.body.courseID,
       courseName: request.body.courseName,
       deptID: request.body.deptID,
       semesterNo: request.body.semesterNo
   });
    user.save().then(data => {
        var object = {
            "statuscode": 200,
            "message": "Successfully created a new Student",
            "record": data
        };
        response.send(object);
    }) .catch(error => {
        var objectres = {
            "statuscode": 500,
            "message": error
        };
        response.send(objectres);
    })
});
module.exports = router;