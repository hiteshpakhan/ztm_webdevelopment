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










