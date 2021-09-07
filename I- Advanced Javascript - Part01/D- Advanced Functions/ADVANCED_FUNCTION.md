# ADVANCED FUNCTION 

    function first(){
        var greet = "hi";
        function second(){
            alert(greet);
        }
        return second;
    }
    var new_fun = first();
    new_fun();

*if we had to convert this example through the arrow function

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

-----------------------------------

# imp

    const cm = (a) => (b) => a * b;      
    const mul = cm(3);        //here the three is the value of a
    mul(4);                   //and 4become the value of b
    mul(10);
    mul(62);

    output:-
    12
    30
    186

now we have the function that always multiply the given value by 3















