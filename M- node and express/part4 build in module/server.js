const http_variable = require("http");       //node comes with the http module 
//we are using http to create our server

const server = http_variable.createServer( (request, response) => {
    // console.log("i here you thanks for response")
    response.setHeader("content-type", "text/html");
    response.end("<h1>Hellooooooo</h1>");
    // we can also sead
    // console.log(request.headers);
    // console.log("request.headers");
    // console.log(request.method);
    console.log("request.method", request.method);
    // console.log(request.url);
    console.log("request.url", request.url);

}) 

server.listen(3000);