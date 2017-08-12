let http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Copyright 2017 TheSkillPanel.com All Rights Reserved.");
    response.end();
}).listen(8888);