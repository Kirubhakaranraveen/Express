const express=require("express");

const app=express();

const middleware1=function(req,res){
   if(res.query.user_id>10000){
    next();
   }else{
    res.send("invalid User");
   }
}
app.get("./:user_id/:product_id",middleware,function(req,res){
    console.log(req.params);
    console.log(req.query);
})
