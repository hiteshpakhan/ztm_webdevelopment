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
        HTMLCollection [p.second]
        0: p.second
        length: 1
        [[Prototype]]: HTMLCollection

as you can see getElementsByClassName used to pick the class by ther declared names
here as paragraph tag cointain the class name "second" so it will pick the <p> tag



















