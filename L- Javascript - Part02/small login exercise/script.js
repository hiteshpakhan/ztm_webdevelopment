var database = [
    {
        username : "name_1",
        password : "pass_1"
    }
];

var newsFeed = [
    {
        username : "boby",
        timeline : "enjoying the beach"
    },
    {
        username : "sally",
        timeline : "javascript is so cool"
    }
];

var given_username = prompt("enter the username : ");
var given_password = prompt("enter your pass ");

function sign_in(user, pass){
    if(user === database[0].username && pass === database[0].password){
        console.log(newsFeed);
    }else{
        alert("sorry wrong username or password");
    }
};
sign_in(given_username, given_password);


