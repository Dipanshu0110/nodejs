const express=require("express")
const app=express()
app.listen(5000,()=>{
    console.log("server Created")
})
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/about",(req,res)=>{
    res.send("About Page")
})      
app.get("/student",(req,res)=>{
    res.send("student details")
    
})