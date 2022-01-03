const express = require("express");
var mongoose = require('mongoose');
const router = express.Router();
var marksModel = require('../models/marks.js');
const { request } = require("express");

router.post('/marksAdd', (request, response) => {
   console.log("request", request);
   const user = new marksModel ({
       studentID: request.body.studentID,
       deptID: request.body.deptID,
       semester: request.body.semester,
       course1_ID: request.body.course1_ID,
       marks1: request.body.marks1,
       course2_ID: request.body.course2_ID,
       marks2: request.body.marks2,
       course3_ID: request.body.course3_ID,
       marks3: request.body.marks3,
       examStatus: request.body.examStatus,
       dateTaken: request.body.dateTaken
   });
    user.save().then(data => {
        var object = {
            "statuscode": 200,
            "message": "Successfully add marks",
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

//API to get individual marks card
router.post('/getStudentsMarkList', (request,response) => {
    marksModel
    .findOne({studentID: request.body.studentID})
    .lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 200,
          "message":"successfully get the marks",
          "record": data
  
        };
        response.send(obj);
      }
    })
    .catch(function(error){
      let obj = {
        "statuscode":500,
        "message":error
      };
      response.send(obj);
    });
  });
  
  //API to get semester wise marks card
  router.post('/getSemesterWiselist', (request,response) => {
    marksModel
    .find({semester: request.body.semester})
    .lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 200,
          "message":"successfully get semester wise marks",
          "record": data
  
        };
        response.send(obj);
      }
    })
    .catch(function(error){
      let obj = {
        "statuscode":500,
        "message":error
      };
      response.send(obj);
    });
  });
  
  //API to get department wise marks card
  router.post('/getDepartmentWiseList', (request,response) => {
    marksModel
    .find({deptID: request.body.deptID})
    .lean()
    .exec()
    .then(function (data){
      if (data){
        var obj= {
          "statuscode": 200,
          "message":"successfully get department wise marks",
          "record": data
  
        };
        response.send(obj);
      }
    })
    .catch(function(error){
      let obj = {
        "statuscode":500,
        "message":error
      };
      response.send(obj);
    });
  });