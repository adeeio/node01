var os = require('os');

function getTime(SECONDS) {
    var date = new Date(null);
    date.setSeconds(SECONDS);
    var result = date.toISOString().substr(11, 8);
    console.log(result[0] + result[1] +" godz. " + result[3] + result[4] + " min. " + result[6] + result[7] + " sek.");   
}

exports.print = getTime;