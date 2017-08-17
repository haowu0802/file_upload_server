/*
* Handles types of requests
* */

let querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");

// form for uploading
function start(response) {
    console.log("Request handler 'start' was called.");

    let body =
        '<html>'+
        '<head>' +
            '<meta http-equiv="Content-Type" content="text/html;' +
            'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
            '<input type="file" name="upload" multiple="multiple">'+
            '<input type="submit" value="Upload image" />' +
        '</form>' +
        '</body>' +
        '</html>' ;

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body+"\nCopyright 2017 TheSkillPanel.com All Rights Reserved.");
    response.end();

}

// upload function
function upload(response, request) {
    console.log("Request handler 'upload' was called.");

    let form = new formidable.IncomingForm();
    console.log("About to parse");
    form.parse(request, function (error, fields, files) {
        console.log("Parsing done.")

        /* try to rename the file, if error, delete then rename */
        fs.rename(files.upload.path, "./tmp/test.png", function (error) {
            if(error){
                fs.unlink("./tmp/test.png");
                fs.rename(files.upload.path, "./tmp/test.png");
            }
        });
    });

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Received image:<br>");
    response.write("<img src='/show' />");
    response.end();
}

// show image uploaded
function show(response) {
    console.log("Request handler 'show' was called.");
    response.writeHead(200, {"Content-Type":"image/png"});
    // read file from hd and pipe into response
    fs.createReadStream("./tmp/test.png").pipe(response);
}

// export functions out of module
exports.start = start;
exports.upload = upload;
exports.show = show;