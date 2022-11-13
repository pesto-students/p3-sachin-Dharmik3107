const incomeExpense = require('../model/incomeExpense');

const addIncomeExpense = async (req,res) =>{
    const {userId,type,value,date,description} = req.body;
    const user = await incomeExpense.findOne({userId});
    if(user){
        const newIncomeExpense = new incomeExpense({
            type,
            value,
            date,
            description,
        })
        await newIncomeExpense.save().then((data)=>{
            return res.json({
                status:true,
                data
            })
        }).catch((error)=>{
            return res.json({
                status:false,
                message:error.message
            })
        })
    }else{
        return res.json({
            status:500,
            message:'user not found'
        })
    }
}

const getIncomeExpense = async (req,res)=>{
    const {page,limit,month,year,userId} = req.body;
    let query = { $and: [{userId},{isDeleted:false}]};
    if(month && year){
        query.$and.push({date:{$gte:new Date(`${year}-${month}-01`),$lte: new Date(`${year}-${month}-31`)}});
    }
    incomeExpense.paginate(query,{page,limit}).then((data)=>{
        return res.json({
            status:true,
            data
        })
    }).catch((error)=>{
        return res.json({
            status:false,
            message:error.message
        })
    })
};

const updateIncomeExpense = async (req,res)=>{
    const {userId, _id,updateItem} = req.body;
    if(_id){
        const item = await incomeExpense.findOne({userId,isDeleted:false});
        await incomeExpense.updateOne(item,updateItem).matchedCount((result)=>{
            if(result!=null){
                return res.json({
                    status:true,
                    message:result
                })
            }else if(result?.isDeleted == true){
                return res.json({
                    status:true,
                    message:'Data is deleted'
                })
            }else{
                return res.json({
                    status:false,
                    message:'data is not available'
                })
            }
        }).catch((error)=>{
            return res.json({
                status:false,
                message:error.message
            })
        })
    }else{
        return res.json({
            status:500,
            message:'Enter Required Value'
        })
    }
}

module.exports = {addIncomeExpense,getIncomeExpense,updateIncomeExpense}