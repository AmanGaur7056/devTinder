const auth=(req,resp,next)=>{
    const token ='aman'
    const isAdminAuth = token==='aman'
    if(isAdminAuth){
        next()
    }else{
        resp.send('unauthorized')
    }
   
}


module.exports={auth}