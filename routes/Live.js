'use strict';

var express = require('express');
var router = express.Router();
var liveBusiness = require('../business/LiveBusiness');
var constants = require('../services/constants');


router.post('/openRoom',jwtCheck, function (req, res, next) {
    let params = {};
    let roomName = req.body.roomName;
    let userName = req.body.userName;
    let roomPass = req.body.roomPass;
    params.roomName = roomName;
    params.userName = userName;
    params.roomPass = roomPass;
    liveBusiness.openRoom(params, result=>{
        if(result === 'error'){
            res.json({'result':'error','message':'Create room failed'});
        }else{
            res.json({'result':'success'});
        }
    });
});



router.get('/getRoom',jwtCheck, function (req, res, next) {
    let userName = req.query.userName;
    liveBusiness.getRoom(userName, result=>{
        if(result === 'error'){
            res.json({'result':'error','message':'Get room info failed'});
        }else{
            res.json({'result':result});
        }
    });
});

module.exports = router;
