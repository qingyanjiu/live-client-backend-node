'use strict';

const redis = require('redis');
var constant = require('../services/constants');

var redis_config = {
    "host": constant.REDIS_HOST,
    "port": constant.REDIS_PORT
};

module.exports = {
    getClient(callback) {
        var client = redis.createClient(redis_config);
        client.select("0", function (err) {
            if (err) {
                callback(client,err);
            } else {
                callback(client);
            }
        });
    }

};