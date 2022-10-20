const express = require('express');
require('dotenv').config();
const userRouter = require('./routes/user');
const connectDatabase = require('./database/database')
const app = express();
connectDatabase();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRouter)

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
})