const http = require("http");

const server = http.createServer((request, response) => {
    console.log("_______________________________");
    console.log("headers = ",request.headers);
    console.log("method = ",request.method);
    console.log("url = ",request.url);
    // response.setHeader("content-type", "text/html");

    const user = {
        name : "john",
        hobby : "skating" 
    }
    response.setHeader("content-type", "application/json");
    response.end(JSON.stringify(user));
})

server.listen(3000);