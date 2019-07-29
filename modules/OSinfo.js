var os = require('os');
var convertTime = require('./convertTime');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();

    if (type === 'Darwin') {
        type = 'OSX';
    }
    else if (type === "Windows_NT") {
        type = "Windows";
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log("System:" .gray, type);
    console.log("Relase:" .red, release);
    console.log('CPU model:' .blue, cpu);
    process.stdout.write('Uptime: ~ ' .green); convertTime.print(uptime);
    console.log('User name:' .yellow, userInfo.username);
    console.log('Home dir:' .white, userInfo.homedir);
}

exports.print = getOSinfo;