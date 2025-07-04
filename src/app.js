const express = require("express");
const app = express();
const connectDb = require('./config/database')
const User = require('./modal/user')



app.post('/signup', async (req,resp)=>{
    const  userDetails ={
        firstName : 'aman',
        lastName : 'gaur',
        emailId : 'aman@gmail.com',
        password : 'aman',
        age : 20,
        gender : 'male'
    }

    const user = new User(userDetails)
    await user.save()
    resp.send('user created')
})

connectDb().then(()=>{
    console.log('database connected')
    app.listen(4000,()=>{
        console.log(
            'server is running on port '
        )
    })
}).catch((err)=>{
    console.log('Database connection failed')
})

// app.listen(
//     4000,
//     ()=>{
//         console.log('server is running on port 4000')
//     }
    
    
    
    //const {auth}=require('./middlewares/auth')
    
    // app.get('/admin/userData',auth,(req,resp)=>{
    //     resp.send('this is a user data')
    // })
    

    // app.get(/.*fly$/,(req,resp)=>{
    //     console.log(req.query)
    //     resp.send({
    //         firstName:'aman',
    //         lastName:'gaur',
    //         age:20,
    //         gender:'male'
    //     })
    // })
    
    
    // app.post('/user',(req,resp)=>{
    //     console.log('Submitting the data to the users')
    //     resp.send('Submitting the data to the users')
    // })
    
    
    // app.delete('/user',(req,resp)=>{
    //     console.log('Deleting the data to the users')
    //     resp.send('Deleting the data to the users')
    // })
    
    
    // app.use("/test",(req,resp)=>{
    //     resp.send('this is a testing module')
    // })
    
// )