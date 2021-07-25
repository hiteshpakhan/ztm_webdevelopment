DOM Selectors
--------------
        getElementsByClassName
        getElementsByTagName
        getElementById

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

----------------------------------------------------------------------------------------------

now the explation of this upper syntax:
now to explain this we are executing our commands in the console_log

1- getElementsByClassName
-------------------------
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
        document.getElementsByClassName("second")
        output:-
        HTMLCollection [p.second]
        0: p.second
        length: 1
        [[Prototype]]: HTMLCollection

as you can see getElementsByClassName used to pick the 




















