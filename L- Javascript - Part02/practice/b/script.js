var arr = [
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
    },
];

var user = prompt("enter your username");
var pass = prompt("enter your password");

function login(a, b){
    for (var i=0; i < arr.length; i++){
        if(arr[i].username===a && arr[i].password===b){
            alert("Welcome Home");
        }
    }
};

login(user, pass);







