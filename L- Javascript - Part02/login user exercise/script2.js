
var get_name = prompt("enter the username : ");
var get_pass = prompt("enter your pass ");

var database1 = [
    {
        username = "user1",
        password = "pass1"
    },
    {
        username = "user2",
        password = "pass2"
    },
    {
        username = "user3",
        password = "pass3"
    },
    {
        username = "user4",
        password = "pass4"
    }
];

var information = [
    {
        username = "user1",
        info = "info1"
    },
    {
        username = "user2",
        info = "info2"
    },
    {
        username = "user3",
        info = "info3"
    },
    {
        username = "user4",
        info = "info4"
    }
];

function permination(user, pass){
    if(user === database1[0].username && pass === database1[0].password){
        alert(" : welcome to home : ");
    }else{
        alert(" : wrong username or password try again later : ");
    }
};
permination(get_name, get_pass);










