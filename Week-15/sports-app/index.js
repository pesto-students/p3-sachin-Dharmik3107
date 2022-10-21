const express = require('express');
require('dotenv').config();
const userRouter = require('./routes/user');
const connectDatabase = require('./database/database');
const paymentRouter = require('./routes/payment');
const scoreRouter = require('./routes/score');
const path = require('path');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')
app.get('/', function(req, res){
    res.render('Payment', {
    key: process.env.PUBLISH_KEY
    })
});

connectDatabase();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRouter);
app.use('/subscribe',paymentRouter);
app.use('/sports',scoreRouter)

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
});