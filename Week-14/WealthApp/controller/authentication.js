const express = require('express')
const jwt = require('jsonwebtoken')

const app = express();

app.get('/auth',(req,res)=>{
    res.json({
        message: 'Welcome to the Auth API'
    })
}).listen(5000,()=>{ console.log('Server Started')})