/*
* basic node server
* */

let http = require("http"),
    url = require("url");

function start(route, handle){

    // process request
    function onRequest (request, response) {

        let pathname = url.parse(request.url).pathname;
        console.log("Request for "+pathname+" received.");
        route(handle, pathname, response, request)

    }

    // start server
    http.createServer(onRequest).listen(8888);
    console.log("Server started.");
}

exports.start = start;
