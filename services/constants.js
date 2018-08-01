// var rf = require("fs");
// var dbip = rf.readFileSync("conf/DBIp","utf-8");

var constants = {
    REDIS_HOST: 'go.mokulive.stream',
    REDIS_PORT: '6379',
    REDIS_USERNAME: '',
    REDIS_PASSWORD: '',
    REDIS_EXPIRE: 86400,

    LIVE_PUSH_HOST: 'rtmp://push.mokulive.stream/live'
};

module.exports = constants;
