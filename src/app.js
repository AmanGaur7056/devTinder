const express = require("express");
const app = express();


app.get('/user',(req,resp,next)=>{
    console.log(req.query)
  //  resp.send('handler function 1')
   next()
},(req,resp,next)=>{
    console.log(req.query)
    resp.send('handler function 2')
})
app.get(/.*fly$/,(req,resp)=>{
    console.log(req.query)
    resp.send({
        firstName:'aman',
        lastName:'gaur',
        age:20,
        gender:'male'
    })
})


app.post('/user',(req,resp)=>{
    console.log('Submitting the data to the users')
    resp.send('Submitting the data to the users')
})


app.delete('/user',(req,resp)=>{
    console.log('Deleting the data to the users')
    resp.send('Deleting the data to the users')
})


app.use("/test",(req,resp)=>{
    resp.send('this is a testing module')
})



app.listen(
    4000,
    ()=>{
        console.log('server is running on port 4000')
    }
)