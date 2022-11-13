const express = require('express');
const {addIncomeExpense,getIncomeExpense,updateIncomeExpense} = require('../controller/incomeExpense');
const {verifyUser} = require('../middleware/auth')
const incomeExpenseRouter = express.Router();

incomeExpenseRouter.post('/addIncomeExpense',verifyUser,addIncomeExpense);

incomeExpenseRouter.post('/getIncomeExpense',verifyUser,getIncomeExpense);

incomeExpenseRouter.post('/updateIncomeExpense',verifyUser,updateIncomeExpense);

incomeExpenseRouter.post('/deleteIncomeExpense',verifyUser,updateIncomeExpense);

module.exports = incomeExpenseRouter;