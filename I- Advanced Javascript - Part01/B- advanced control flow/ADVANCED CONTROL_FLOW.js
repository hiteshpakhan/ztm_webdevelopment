// JAVASCRIPT CONDITIONALS
// -------
// * if
// * else
// * else if
// * ternary operator 
// * switch

// we already see the first three -if, -else, and -else if
// and now we are going to see the -ternary operator and -switch

// ternary operator 
// ----------
// it is just like the if else statement and it is a bit easier to implement than the if else

//     syntax:-
//     condition ? expression1 : expression2;
//     that says:-
//     if the condition true do expression1 
//     if the condition false do expression2

// example-
    
    // inside the console.log:-
    function a(bool){
        return bool;
    }
    var exp1 = a(true) ? "this is true condition" : "this is not true condition";
    var account = (a(false)) ? "1234" : "not valid" 
    exp1;
    account;

    // output:-
    // "this is true condition"
    // "not valid"




// SWITCH
// ------
// syntax:-

    // switch(value){
    //     case "option_value1":
    //         statement1;
    //         break;
    //     case "option_value2":
    //         statement2;
    //         break;
    //     .
    //     .
    //     .
    //     default:
    //         statementn;
    // }


// example:-

    function b(direction){
        var c;
        switch(direction){
            case "right":
                c="aaaaaaa";
                break;
            case "left":
                c="bbbbbbb"
                break;
            case "back":
                c="ccccccc";
                break;
            default:
                c="direction not valid";
        }
        return c;
    }
    b("right");

    // output:-
    // "aaaaaaa"








