var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");   

button.addEventListener("click", function(){   //this function will exeacute if you click the button
    if(input.value.length > 0){   // this will check the input text length
        var li = document.createElement("li");   //this will create the new li tag
        li.appendChild(document.createTextNode(input.value));  //this will create the text in li tag
        ul.appendChild(li);   //this will make li the child of ul
        input.value = "";   //this will make the input box empty
    }
});

// it can also be added by clicking the enter button on keybord 
// for that we have to use the following programe

input.addEventListener("keypress", function(event){   //this function will exeacute if you click the button
    if(input.value.length > 0 && event.keyCode === 13){   // this will check the input text length    //in the keyCode the letter C is capital
        var li = document.createElement("li");   //this will create the new li tag
        li.appendChild(document.createTextNode(input.value));  //this will create the text in li tag
        ul.appendChild(li);   //this will make li the child of ul
        input.value = "";   //this will make the input box empty
    }
});


//the upper code is alittle bit lengthy we can short this vode by using functions
// for example:


function a(){
    return input.value.length;
}
button.addEventListener("click", function(){
    if (a() > 0){
        var li = document.createElement("li");   
        li.appendChild(document.createTextNode(input.value));  
        ul.appendChild(li);    
        input.value = ""; 
    }
})




