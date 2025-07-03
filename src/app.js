const express = require("express");
const app = express();


app.get("/",(req,resp)=>{
    resp.send('this is a home module')
})

app.get("/test",(req,resp)=>{
    resp.send('this is a testing module')
})


app.get("/login",(req,resp)=>{
    resp.send('this is a login module')
})

app.listen(
    4000,
    ()=>{
        console.log('server is running on port 4000')
    }
)