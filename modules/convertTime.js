var os = require('os');

function getTime(SECONDS) {
    var date = new Date(null);
    date.setSeconds(SECONDS);
    var resoult = date.toISOString().substr(11, 8);
    console.log(resoult[0] + resoult[1] +" godz. " + resoult[3] + resoult[4] + " min. " + resoult[6] + resoult[7] + " sek.");   
}

exports.print = getTime;