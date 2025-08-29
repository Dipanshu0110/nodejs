const server=require("http")
const user= [
    {"id":101,"name":"amit"},
    {"id":102,"name":"sumit"},
    {"id":103,"name":"rahul"}
]
server.createServer((req,res)=>{
    //res.write("message from server");
    if(req.url=="/"){
        res.write("this is home page");
    }
    else{
        if(req.url=="/about"){
            res.write("this is about page");
        }
        else if(req.url=="/userapi"){  
            res.write(JSON.stringify(user));
        }
        else{
            res.write("404 page not found");
        }
    }
    res.end("");
}).listen(4002,()=>
    {
        console.log("server is running")

})