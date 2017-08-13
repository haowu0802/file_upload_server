let http = require("http");

function start(){
    function onRequest (request, response) {
        console.log("Request received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Copyright 2017 TheSkillPanel.com All Rights Reserved.");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server started.");
}

exports.start = start;
