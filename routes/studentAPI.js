const express = require("express");
var mongoose = require('mongoose');
const router = express.Router();
var studentModel = require('../models/student.js');
const { request, response } = require("express");
const student = require("../models/student.js");

router.post('/studentAdd', (request, response) => {
   console.log("request", request);
   const user = new studentModel ({
       studentID: request.body.studentID,
       firstName: request.body.firstName,
       lastName: request.body.lastName,
       address: request.body.address,
       dob: request.body.dob,
       gender: request.body.gender,
       deptID: request.body.deptID,
       status: request.body.status,
       semester: request.body.semester,
       yoj: request.body.yoj
   });
     if(user.studentID === "" ){
        var objectres = {
            "statuscode": 400,
            "message": "StudentID is Mandatory"
        };
        response.send(objectres);
        return;
   }
   if(user.studentID.length != 10 ){
    var objectres = {
        "statuscode": 400,
        "message": "StudentID should be only 10 character"
    };
    response.send(objectres);
    return;
    }
    if(user.firstName === ""){
    var objectres = {
        "statuscode": 400,
        "message": "Firstname is Mandatory"
    };
    response.send(objectres);
    return;
    }
    console.log(user.firstName.length);
    if(user.firstName.length > 32 ){
    var objectres = {
        "statuscode": 400,
        "message": "Firstname should be only <=32 character"
    };
    response.send(objectres);
    return;
    }
    if(user.lastName === ""){
        var objectres = {
            "statuscode": 400,
            "message": "Lastname is Mandatory"
        };
        response.send(objectres);
        return;
    }
    console.log(user.lastName.length);
    if(user.lastName.length > 32 ){
        var objectres = {
            "statuscode": 400,
            "message": "Lastname should be only <=32 character"
        };
        response.send(objectres);
        return;
    }
    if(user.address === ""){
        var objectres = {
            "statuscode": 400,
            "message": "Address is Mandatory"
        };
        response.send(objectres);
        return;
    }
    if(user.dob === ""){
        var objectres = {
            "statuscode": 400,
            "message": "Date of birth is Mandatory"
        };
        response.send(objectres);
        return;
    }
    if(user.gender === ""){
        var objectres = {
            "statuscode": 400,
            "message": "Gender is Mandatory"
        };
        response.send(objectres);
        return;
    }
    if(user.deptID === ""){
        var objectres = {
            "statuscode": 400,
            "message": "DeptID is Mandatory"
        };
        response.send(objectres);
        return;
    }
    if(user.status === ""){
        var objectres = {
            "statuscode": 400,
            "message": "Student status is Mandatory"
        };
        response.send(objectres);
        return;
    }
    if(user.semester === ""){
        var objectres = {
            "statuscode": 400,
            "message": "SemesterNo status is Mandatory"
        };
        response.send(objectres);
        return;
    }
    if(user.yoj === ""){
        var objectres = {
            "statuscode": 400,
            "message": "Year of joining is Mandatory"
        };
        response.send(objectres);
        return;
    }
    user.save().then(data => {
        console.log("Successfully created a new student");
        var object = {
            "statuscode": 200,
            "message": "Successfully created a new Student......",
            "record": data
        };
        response.send(object);
    }) .catch(error => {
        var objectres = {
            "statuscode": 500,
            "message": error
        };
        response.send(objectres);
    });

});
module.exports = router;


//Api to delete the student
router.post('/deletestudent',function(request,response)  {
    studentModel.deleteOne ({
        studentID:request.body.studentID
    })
    .exec()
    .then(function(result,error){
     if(result){
         console.log(result);
        var object = {
            "statuscode": 200,
            "message": "Successfully removed student",
            "record": result 
        };
           response.send(object);    
         }
         if(error){
             let object = {
                 "statusCode": 500,
                 "message": error
             };
             response.send(object);
         }
     })
    })

module.exports = router;

//Api to search student details.

router.post('/getstudent',function(request,response){
    studentModel.findOne({studentID: request.body.studentID})
    .lean().exec().then(function(data){
        if(data){
            console.log(data);
            let object = {
                "statusCode": 200,
                "record": data,
                "message":"successfully get the student details"
            };
            response.status(200).send(object);
        }
})
    .catch(function(error){
        let object = {
            "statusCode": 500,
            "message": "Student not found"
        };
        response.status(500).send(object);
    });
});  

//Api to update student details

router.post('/updatestudent', function (request, response) {
    student.findOne({studentID:request.body.studentID})
    .exec()
    .then(function (data) {
        if(data) {
            console.log("1",data);
            data.firstName = request.body.firstName,
            data.lastName = request.body.lastName;
            console.log("2",data);
            data.save().then(function(data) {
                var object = {
                    "statuscode": 200,
                    "record": data,
                    "message": "succesfully update a student"
                }
                response.send(object);
            })
              .catch(function(error){
                  var object = {
                      "statuscode": 500,
                      "message": "student record doesnot updated",
                      "record": error  
                  }
                  response.send(object);
              })
        }
    })
    .catch(function (error){
        var object = {
            "statuscode": 500,
            "message": "student record not found",
        }
        console.log("error message", error);
        response.send(object);
    })
});
module.exports = router;