const express = require('express');
require('dotenv').config();

const app = express();

app.use('/',(req,res)=>{
    res.json({
        messsage:'connected'
    })
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
})