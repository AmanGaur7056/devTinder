const mongoose = require('mongoose')

const connectDb =async ()=>{
    await mongoose.connect("mongodb+srv://namastedev:zSbG5gvbwVl2tRJp@namaste.kh0lcy0.mongodb.net/devTinder")
}


module.exports =connectDb
