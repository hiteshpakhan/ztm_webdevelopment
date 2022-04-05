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

var get_name = prompt("enter the username : ");
var get_pass = prompt("enter your pass ");

function sign_in(user, pass){
    if(user === database[0].username && pass === database[0].password){
        // here database is the array [0] is the first item of an array but its an object so we further joined the .username to access the username inside the object
        console.log(newsFeed);
        // it just the access to the newsFeed 
    }else{
        alert("sorry wrong username or password");
    }
};
sign_in(get_name, get_pass);