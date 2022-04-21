const http = require("http");

const server = http.createServer((request, response) => {
    console.log("_______________________________");
    // console.log("headers = ",request.headers);
    console.log("method = ",request.method);
    console.log("url = ",request.url);
    response.setHeader("content-type", "text/html");
    response.end("<h1>hello</h1>");
})

server.listen(3000);