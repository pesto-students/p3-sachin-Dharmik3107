const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Service started on port ${port} `)
})