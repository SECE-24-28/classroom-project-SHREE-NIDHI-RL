const express = require('express');
const mdb=require('mongoose');
const app=express();
const PORT=8001;
mdb.connect('mongodb://127.0.0.1:27017/MERN').then(()=>{
    console.log("Mongodb connection successfull")
}).catch((err)=>{
    console.log("Mongodb connection unsuccessful",err)
})
app.get('/',(req,res)=>{
    res.send("Welcome to backend server")
})
app.get('/json',(req,res)=>{
    res.json({
     "college":"sece",
     "Dept":"Cys",
     "StuCount":"64"
    })  
})
app.get('/static',(req,res)=>{
    res.sendFile('D:/TRAINING/React/Backend/index.html')
    })
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
app.post('/signup',(req, res)=>{
        const{email,username,password} = req.body;
        const newSignup = {
        email: email,
        username: username,
        password: password
    }
    newSignup.save
    res.json({"Message":"Signup successfull"})
})