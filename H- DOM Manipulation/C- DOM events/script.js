// var demo = document.getElementsByTagName("button");  //it will give us the array of button for that we have to use the first element at the [0] position
var demo = document.getElementsByTagName("button")[0];
// now it will store the value of the first button tag inside the demo variable 

demo.addEventListener("click", function(){    //here whenever the click happen the function will execute
    // addEventListener used to access the events
    console.log("click action perform");
})









