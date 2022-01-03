const express = require("express");
var mongoose = require('mongoose');
const router = express.Router();
// const cors = require("cors");
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
var studentModel = require('./models/student.js');
var studentApi = require('./routes/studentAPI.js');

var courseModel = require('./models/course.js');
var courseApi = require('./routes/courseAPI.js');

var deptModel = require('./models/deptID.js');
var deptApi = require('./routes/deptAPI.js');

var marksModel = require('./models/marks.js');
var marksApi = require('./routes/marksAPI.js');


app.use('/',router);
// var corsOptions = {
//     origin: "http://192.168.0.120:8080"
//   };
//   app.use(cors(corsOptions)); 
app.get("/",function(request,response){
response.send("Hello World!")
})
mongoose.connect('mongodb://localhost:27017/studentManagementSystem', () => {
     console.log("[+] Succesfully connected to database.");
   
    });


app.listen(2000, function () {
console.log("Started application on port %d", 2000)
});

app.use('/', studentApi);
app.use('/', courseApi);
app.use('/', deptApi);
app.use('/', marksApi);





