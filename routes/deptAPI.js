const express = require("express");
var mongoose = require('mongoose');
const router = express.Router();
var deptModel = require('../models/deptID.js');
const { request } = require("express");

router.post('/departmentAdd', (request, response) => {
   console.log("request", request);
   const user = new deptModel ({
       deptID: request.body.deptID,
       deptName: request.body.deptName,
       maxIntake: request.body.maxIntake,
   });
    user.save().then(data => {
        var object = {
            "statuscode": 200,
            "message": "Successfully created a new Department",
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