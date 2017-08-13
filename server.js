let http = require("http");
let url = require("url");

function start(route, handle){
    function onRequest (request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log("Request for "+pathname+" received.");

        response.writeHead(200, {"Content-Type": "text/plain"});
        let content = route(handle, pathname);
        //"Copyright 2017 TheSkillPanel.com All Rights Reserved."
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server started.");
}

exports.start = start;
