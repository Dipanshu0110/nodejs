const server=require("http")
server.createServer((req,res)=>{
    //res.write("message from server");
    if(req.url=="/"){
        res.write("this is home page");
    }
    else{
        if(req.url=="/about"){
            res.write("this is about page");
        }
        else{
            res.write("404 page not found");
        }
    }
    res.end("");
}).listen(4001,()=>
    {
        console.log("server is running"  )

})