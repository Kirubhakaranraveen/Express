const express=require('express');

const app=express();

app.get('/',function(req,res){
    res.send("this file is about normal routing")
    res.end()
});

app.get("/api/main",function(req,res){
    res.send("Express defintion: it is a most poular node js framework in this we define second as an object,which includes routing pathin it.");
    res.end();
})
app.listen(3000);