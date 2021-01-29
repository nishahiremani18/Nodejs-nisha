//rest api demo in nodejs
var express = require('express'); //require the express framework
var app=express();
var fs=require('fs'); //require file system object

//endpoint to get a list of users
app.get('/getUsers',function(req,res){
    fs.readFile(__dirname+"/"+"users.json",'utf8',function(err,data){
        console.log(data);
        res.end(data);
    });
})


//create a server to listen at port 8080
var server= app.listen(8080,function(){
    var host =server.address().address
    var port=server.address().port
    console.log("REST API at http://%s:%s",host,port)
})

var user={
    "user5":{
    "id":5,
    "name":"disha"
   }
}

//the addUser endpoint 
app.post('/addUser',function(req,res){
    //step2: read existing users data and use file reader to read data
    fs.readFile(__dirname+"/"+"users.json",'utf8',function(err,data){
        data=JSON.parse(data);
        //step3: append the users data in ths existing list
        data["user5"]=user["user5"];
        console.log(data);
        res.end();

    })
});