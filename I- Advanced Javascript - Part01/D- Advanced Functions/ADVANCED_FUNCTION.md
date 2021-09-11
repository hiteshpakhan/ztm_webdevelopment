this part can blow your mind so stay focus
# ADVANCED FUNCTION (CLOSURES) 

    function first(){
        var greet = "hi";
        function second(){
            alert(greet);
        }
        return second;
    }
    var new_fun = first();
    new_fun();

* if we had to convert this example through the arrow function

the conversion will be:-

    const first = () => {
        const greet = "hi";
        const second = () => {
            alert(greet);
        }
        return second();
    }       
    const new_fun = first();
    new_fun();                 

------------------

# imp CURRYING
* currying is the process of converting a function that takes multiple arguments into a function that takes them one at a time   
* in short we are converting the function that takes multiple value into the function that takes single value 

normal function:-

    const multiply = (a,b) => a * b;

converted intocurrying function:-

    const cm = (a) => (b) => a * b;      
    const mul = cm(3);        //here the three is the value of a
    mul(4);                   //and 4become the value of b
    mul(10);
    mul(62);

    output:-
    12
    30
    186

* now we have the function that always multiply the given value by 3
* you can use this when you have to repit specific execution
-------------------

# COMPOSE
act of putting of two function together to form a third function where the output of one function is the input of other

    const compose = (f, g) => (a) => f(g(a));  //f and g are the function here f(g(a)) = sum(sum(7/11)) 
    const sum = (num) => num+1;                //sum = (5/11) => 5/11 + 1;
    compose(sum, sum)(5);                      //it will give the a=5, f=sum, g=sum in upper statement
    compose(sum, sum)(11);                     

    output:-
    7
    13
















