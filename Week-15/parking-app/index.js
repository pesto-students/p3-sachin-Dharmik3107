const express = require('express');
require('dotenv').config();
const dbConnect = require('./database/database');
const router = require('./routes/combinedRoutes');

const app = express();

dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/parking',router)

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Service started on port ${port} `)
})