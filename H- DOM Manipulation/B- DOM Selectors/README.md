DOM Selectors
--------------
        getElementsByTagName
        getElementsByClassName
        getElementById             //you can see that hear we used "element" insted of "elements" we did not use the "s" because id is the single unique out of all  

        querySelector
        querySelectorAll

        getAttribute
        setAttribute

##Changing Styles
-----------------
        style.{property} //ok

        className //best
        classList //best

        classList.add
        classList.remove
        classList.toggle

##Bonus
-------
        innerHTML //DANGEROUS

        parentElement
        children

##It is important to CACHE selectors in variables
-------------------------------------------------

----------------------------------------------------------------------------

1- getElementsByTagName
-------------------------
this inside console log :

        document.getElementsByTagName("h1");
        output:-
        HTMLCollection [h1]
        0: h1
        length: 1
        [[Prototype]]: HTMLCollection
    
as you can see getElementsByTagName used to pick the tags in the html file
here as in our html file the h1 tag is selected 

2- getElementsByClassName
-------------------------
this inside console log :

        document.getElementsByClassName("second")
        output:-
        HTMLCollection(2) [p.second, p.second]          //there are 2 <p> tag with class name "second" so it will show them in array
        0: p.second
        1: p.second
        length: 2
        [[Prototype]]: HTMLCollection

as you can see getElementsByClassName used to pick the class by ther declared names
here as paragraph tag cointain the class name "second" so it will pick the \<p> tag

there are 2 \<p> tag with class name "second" so it will show them in array
to access the single one in that array you can use the further example:-

        document.getElementsByClassName("second")[0]
        output:-
        <p class=​"second">​zero execuse​</p>​      //as you see now it show the first <p> tag   

here we used the [0] to get the first tag in the array of tags


















