
var os = require('os');
var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdout.write('Welcome:\n');
process.stdout.write('To check current Node version, type in - node version\n');
process.stdout.write('To check user language operation system, type in - user lang\n');
process.stdout.write('To check operating system, type in - getOSinfo\n');
process.stdout.write('To exit application, type in - /exit\n');

process.stdin.on('readable', function () {

    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        var env = process.env;
        var ver = process.versions;
        switch (instruction) {
            case 'node version':
                process.stdout.write(ver.node);
                break;
            case 'user lang':
                process.stdout.write(env.LANG);
                break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case 'getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }

    }


});

