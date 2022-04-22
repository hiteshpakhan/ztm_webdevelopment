// postman
// post
// .body
// .use

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false})); //it will only parse the urlencoded
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
    // if you want to use the req.body you have to use the middleware
    // and the middleware we use is body-parser
    // npm install body-parser
    // const user = {
    //     name : "name1",
    //     code : "code1"
    // }
    // res.send(user);
    res.send("success");
});

app.listen(3000);