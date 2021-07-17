var database = [
    {
        username : "hitesh",
        password : "mao9tittre"
    },
    {
        username : "hitesh2",
        password : "mao9tittre2"
    },
    {
        username : "hitesh3",
        password : "mao9tittre3"
    },
    {
        username : "hitesh4",
        password : "mao9tittre4"
    }
];

var user = prompt("enter your username");
var pass = prompt("enter your password");

function fun2(a, b){
    for (var i=0; i<database.length; i++){
        if(a===database[i].username && b===database[i].password){
            return true;
        }
    }
    return false;
}

function login(a, b){
    if(fun2(a, b)){
        console.log("welcome");
    }else{
        console.log("wrong username or password");
    }
};


login(user, pass);







