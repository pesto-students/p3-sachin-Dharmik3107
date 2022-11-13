const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./route/user');
const assetRouter = require('./route/assets');
const incomeExpenseRouter = require('./route/incomeExpense')

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRouter)
app.use('/assets',assetRouter)
app.use('/incomeExpense',incomeExpenseRouter)

app.listen(process.env.PORT || 5000, (error)=>{
    if (error) return error;
    console.log(`WealthApp listening on port ${process.env.PORT}`);
})