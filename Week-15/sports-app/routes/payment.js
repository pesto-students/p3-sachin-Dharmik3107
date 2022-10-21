const subRouter = require('express').Router();
const subscribe = require('../controller/payment');

subRouter.post('/payment',subscribe);

module.exports = subRouter;
