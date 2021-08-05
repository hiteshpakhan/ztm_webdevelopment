// var demo = document.getElementsByTagName("button");  //it will give us the array of button for that we have to use the first element at the [0] position
var demo = document.getElementsByTagName("button")[0];
// now it will store the value of the first button tag inside the demo variable 

demo.addEventListener("click", function(){    //here whenever the click happen the function will execute
    // addEventListener used to access the events
    // click is the event listener that react when you click on somthing
    console.log("click action perform");
})

// there are other mouse event listener for example:-
// mouseenter : it react when you hover the mouse to it
// mouseleave : it react as soon as you leave the mouse from there
// there are many of the event listener    https://www.w3schools.com/jsref/dom_obj_event.asp









