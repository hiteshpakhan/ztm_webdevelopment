const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

app.get("/", (req, res) => {
     res.send("we are on th elocalhost:3000");
});

app.get("/profile", (req, res) => {
    res.send("we are in the get profile request by using res.send");
});


app.post("/profile", (req, res) => {
    console.log("hi there this is the post profile request");
    console.log(req.body)
    res.send("success");
});

app.listen(3000);