const port=4500
const express=require('express')
const app=express();
const path=require('path')

app.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname,'reg.html'));

});

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'login.html'));

});

  
app.listen(port,()=>{
    console.log('server is learning')
    
})

