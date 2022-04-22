// express
// get
// post
// put
// delete
// .send

const express = require("express");

const app = express();


app.get("/", (req, res) => {
     res.send("getting root");
});

app.get("/profile", (req, res) => {        //here the / is the path        here req is request and res for the response
    // console.log("hi there");
    // const user = {
    //     name : "name1",
    //     code : "code1"
    // }
    // res.send("hellooooo");
    res.send("getting profile");
});


app.post("/profile", (req, res) => {
    console.log("hi there");
    const user = {
        name : "name1",
        code : "code1"
    }
    res.send(user);
});
//every time you refresh a browser it is the get request
//so first on the localhost:3000/profile we will see the "getting profile message"
//if you put the url that does not exist it will give you an 404 not found

app.listen(3000);