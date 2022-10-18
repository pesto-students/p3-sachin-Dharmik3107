const express = require('express');
const {addAsset,getAsset,updateAsset} = require('../controller/assets');
const {verifyUser} = require('../middleware/auth')

const assetRouter = express.Router();

assetRouter.post('/createAsset',verifyUser,addAsset);

assetRouter.post('/getAsset',verifyUser,getAsset);

assetRouter.post('/updateAsset',verifyUser,updateAsset);

assetRouter.post('/deleteAsset',verifyUser,updateAsset);

module.exports = assetRouter;