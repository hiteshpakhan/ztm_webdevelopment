// bodyParser.urlencoded
// bodyParser.json
// req.query
// req.body
// req.header
// req.params

const express = require("express");
const bodyParser = require("body-parser");



const app = express();

app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

app.get("/:id", (req, res) => {
    // req.query
    // console.log("===",req.query); //when interacting with browser browser send info by the url query that we can grab by the .query method 
    
    // req.body
    // we have already seen the body by the body-parser
    
    // req.header
    // console.log(req.header);

    // req.params 
    console.log(req.params);    //by this we can get the parameters in the url

    // res.send("we are on th elocalhost:3000");

    // we can also send the response by the status code
    res.status(404).send("not found message");
});


app.listen(3000);