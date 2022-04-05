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

var user = prompt("enter your username");      //it will take the input for the username
var pass = prompt("enter your password");      //it will take the input for the password

function fun2(a, b){                           //we are giving the a and b the values of username and password 
    for (var i=0; i<database.length; i++){      
        if(a===database[i].username && b===database[i].password){
            return true;                       //the moment it wil gets the value of return it will stops the execution and get out of the (if) and the (for) statement
        }
    }
    return false;                              //and the value of the username and password dosent mach the any of the values in the database it will return the value false 
}

function login(a, b){
    if(fun2(a, b)){
        console.log("welcome");
    }else{
        console.log("wrong username or password");
    }
};


login(user, pass);