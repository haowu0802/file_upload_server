let exec = require("child_process").exec();

function start() {
    console.log("Request handler 'start' was called.");
    let content = "empty";

    exec("ls -lah", function (error, stdout, stderr) {
        content = stdout;
    });

    function sleep(m){
        let startTime = new Date().getTime();
        while(new Date().getTime() < startTime + m){}
    }

    sleep(10000);
    return content;
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Upload";
}

exports.start = start;
exports.upload = upload;
