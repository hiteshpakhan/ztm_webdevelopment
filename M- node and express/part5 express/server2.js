// Middleware

const express = require("express");

const app = express();

// express has the concept of the middleware
// to use the middleware you have to use the .use with the express

app.use((req, res, next) => {
    console.log("hi there");
    next();
});

app.get("/", (req, res) => {
     res.send("testest");
});

app.listen(3000);