const { assets } = require("../model/assets");

const addAsset = async (req, res) => {
  const { userId, fixedIncome, cash, bankBalance } = req.body;
  const assetUser = await assets.findOne({ userId });
  if (assetUser) {
    const newAsset = new assets({
      userId,
      assetId: Date.now() + userId,
      fixedIncome,
      cash,
      bankBalance,
    });
    await newAsset
      .save()
      .then((res) => {
        return res.json({
          status: 200,
          message: "asset created successfully",
        });
      })
      .catch((error) => {
        return res.json({
          status: 400,
          message: error.message,
        });
      });
  } else {
    return res.json({
      status: 401,
      message: "User not found",
    });
  }
};

const getAsset = async(req,res)=>{
    const { userId, fixedIncome, cash, bankBalance } = req.body;
    const assetUser = await assets.findOne({ userId });
    let query = {$and: [{userId},{isDeleted:false}]};
    if(assetUser){
        assets.paginate(query,{page,limit}).then((data)=>{
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
    }
}

const updateAsset = async(req,res)=>{
  const { userId, fixedIncome, cash, bankBalance , _id ,updateItem} = req.body;
  if(_id){
    const asset = await assets.findOne({_id});
    await assets.updateOne(asset,updateItem).then((result)=>{
      if(result!=null){
      return res.json({
        status:true,
        message:result
      })}
      else if(result?.isDeleted == true){
        return res.json({
          status:true,
          message:'Data is deleted'
        })
      }
      else{
        return res.json({
          status:false,
          message:'Data is not available'
        })
      }
    }).catch((error)=>{
      return res.json({
        status:500,
        message:error.message
      })
    })
  }else{
    return res.json({
      status:400,
      message:'Enter required data'
    })
  }
}
module.exports = {addAsset,getAsset,updateAsset};
