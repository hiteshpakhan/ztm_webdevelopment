var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector(ul);

button.addEventListener("click",function(){     //here we add the event listener to the button 
    var li = document.createElement("li");   //here we create the new element li
    li.appendChild(document.createTextNode("testing"));  //here we add the some text to the li element
    ul.appendChild(li);
})










