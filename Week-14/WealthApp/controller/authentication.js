const express = require('express');
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

const app = express();

dotenv.config({path:'../config.env'});
const port = process.env.PORT || 5000;

app.get('/auth',(req,res)=>{
    res.json({
        message: 'Welcome to the Auth API'
    })
});
app.listen(port,()=>{ console.log(`Server started as ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)});