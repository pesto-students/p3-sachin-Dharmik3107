const scoreRouter  = require('express').Router();
const score = require('../controller/score');
const {verifyUser} = require('../middlewares/userAuth')

// scoreRouter.get('/matches',score);
scoreRouter.post('/matches',verifyUser,score);

module.exports = scoreRouter;



