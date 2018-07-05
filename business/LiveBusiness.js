'use strict';

var guid = require('../services/guid');
var Date = require('../services/MyDate');
var md5 = require('md5');
var constants = require('../services/constants');

var myDate = new Date();
var dateTime = myDate.pattern("yyyy-MM-dd HH:mm:ss");

var redisConnection = require('../conf/RedisConnection')

module.exports = {

    openRoom: function (params, callback) {
        redisConnection.getClient((client,err)=>{
            if(err){
                console.error('get redis connection error');
                callback('error');
            }
            else {
                let streamCode = guid.create();
                params.streamCode = streamCode;
                client.set(params.userName, JSON.stringify(params), err => {
                    if (err) {
                        console.error('set room info error');
                        callback('error');
                    } else {
                        client.expire(params.userName, constants.REDIS_EXPIRE);
                        callback('success');
                    }
                });
            }
        })
    },

    getRoom: function (userName, callback) {
        redisConnection.getClient((client,err)=>{
            if(err){
                console.error('get redis connection error');
                callback('error');
            }
            else {
                client.get(userName, (err,result) => {
                    if (err) {
                        console.error('get room info error');
                        callback('error');
                    } else {
                        callback(result);
                    }
                });
            }
        })
    }

};