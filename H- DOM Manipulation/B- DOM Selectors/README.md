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

1- getElementsByTagName()      
-------------------------
        console log:-
        document.getElementsByTagName("h1")

        output:-
        HTMLCollection [h1]
        0: h1
        length: 1
        [[Prototype]]: HTMLCollection
    
* as you can see getElementsByTagName used to pick the tags in the html file
* here as in our html file the h1 tag is selected 

2- getElementsByClassName()
-------------------------
        console log:-
        document.getElementsByClassName("second")

        output:-
        HTMLCollection(2) [p.second, p.second]          //there are 2 <p> tag with class name "second" so it will show them in array
        0: p.second
        1: p.second
        length: 2
        [[Prototype]]: HTMLCollection

* as you can see getElementsByClassName used to pick the class by ther declared names
* here as paragraph tag cointain the class name "second" so it will pick the \<p> tag
* there are 2 \<p> tag with class name "second" so it will show them in array
to access the single one in that array you can use the further example:-

        console log:-
        document.getElementsByClassName("second")[0]

        output:-
        <p class=​"second">​zero execuse​</p>​      //as you see now it show the first <p> tag   

* here we used the [0] to get the first tag in the array of tags

3- getElementById()
-----------------
this is quite different by class and tag here to declare we used only the "element" not the "elements"

        console log:-
        document.getElementById("first")

        output:-
        <p id=​"first">​Get it done today​</p>​

hear you can see that it show the id tag that has name first

4- querySelector()
----------------
* with querySelector you can select elements just like we do in the css

        console log:-
        document.querySelector("h1")
        
        output:-
        <h1>​Shopping List​</h1>​

* but the probleme here is that it only selects the first item among all for example

        console log:-
        document.querySelector("li")

        output:-
        <li random=​"23">​…​</li>​        //but among all the <li> it only selects the first <li> item

to selects all the items at a time by query we can use number 5 syntax querySelectorAll()

* we can see the css propertyes by querySelectors

        console log:-
        document.querySelector("h1").style;

        output:-
        CSSStyleDeclaration {additiveSymbols: "", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", …}
        <!-- it is default css of h1 -->

* and we can also changed the css propertyes by querySelector

        console log:-
        document.querySelector("h1").style.background = "yellow";

        output:-
        "yellow"           //the background color of the h1 tag has been successfully changed
        -------------------------------------------------------------------------------
        or you can do this second way

        console log:-
        var h1 = document.querySelector("h1")
        h1.style.background = "red";

        output:-
        "red"             //the background color of the h1 tag has been successfully changed

5- querySelectorAll()
---------------------
* querySelectorAll() can select all the element of that tag name
* example 1

        console log:-
        document.querySelectorAll("li")

        output:-
        NodeList(6) [li, li, li, li, li, li]
        0: li
        1: li
        2: li
        3: li
        4: li
        5: li
        length: 6            //now as you can see it gives all the <li> tag element 

* example 2

        console log:-
        document.querySelectorAll("li, h1")

        output:-
        NodeList(7) [h1, li, li, li, li, li, li]
        0: h1
        1: li
        2: li
        3: li
        4: li
        5: li
        6: li

6- getAttribute()
-----------------
before you use the getAttribute you have to select the element
if we want to grab the attribute of random we had to select the element first and then use the getAttribute 

        console log:-
        document.querySelector("li").getAttribute("random");

        output:-
        "23"              //getAttribute can be used to grab attribute and for example you can changed the hight width of image

7- setAttribute()
-----------------
steAttribute is just like the getAttribute but we can change the attribute by this

        console log:-
        document.querySelector("li").setAttribute("random","200");

        output:-
        undefined      //here the value changed now if we check the value of attribute random again

        ----------------------------------------------------------------------

        console log:-
        document.querySelector("li");
        
        output:-
        <li random=​"200">​…​</li>​             //as you can see that the value is successfully changed

-----------------------------------------------------------------------------
Changing Styles 
---------------

1- style.{property}
-------------------
* it just like we did in querySelector() we use the style. also inside it 

        console log:-
        document.querySelector("h1").style.background = "yellow";      //here we use the style.{property} syntaxthat changed the color

        output:-
        "yellow"           //the background color of the h1 tag has been successfully changed

        ----------------------------------------------------------------------------
        or you can do this second way

        console log:-
        var h1 = document.querySelector("h1")     //here we add the value to the h1 variable
        h1.style.background = "red";

        output:-
        "red"             //the background color of the h1 tag has been successfully changed

2- className
------------
* by this you can assign the classname to any tag

        console log:-
        var a = document.querySelector("h1");
        a.className = "coolTitle";

        output:-
        "coolTitle"  //by this all the propertyes of class "coolTitle" in the css are apply to the h1 tag

3- classList
------------
* it is used to see the class name that the tag has

        console log:-
        document.querySelector("h2").classList;

        output:-
        ["cn1", "cn2", "cn3", "cn4", value: "cn1 cn2 cn3 cn4"]    //as you can see it will show all the class name to us

4- classList.add()
----------------
* it is used to add the class

        console log:-
        document.querySelector("h2").classList.add("coolTitle");         //it will add the new class "coolTitle"
        document.querySelector("h2").classList;                          //it will show the list of classes

        output:-  
        ["cn1", "cn2", "cn3", "cn4", "coolTitle", value: "cn1 cn2 cn3 cn4 coolTitle"]            

* as you can see that the new class "coolTitle" has been added

5- classList.remove()
--------------------
* it is totly opposite to the classList.add() 
* it is used to remove the class from the tag 

        console log:-
        document.querySelector("h2").classList.remove("cn1");         //it will remove the class named "cn1"
        document.querySelector("h2").classList;  

        output:-
        ["cn2", "cn3", "cn4", value: "cn2 cn3 cn4"]

* as you can see that the class named "cn1" is removed from the list

6- classList.toggle
-------------------
* it is used to toggle the assign element
* it is quite useful to turn and off somthing
* it can also used when you made a mistake you can turn it back by toggle it

        console log:-
        document.querySelector("h3").classList.add("done");        //here we assign the class "done" to the tag
        document.querySelector("h3").classList.toggle("done");     //and here we toggle this class means we undo this assignment
        
        output:-
        false                                                      
        -----------------------
        console log:-
        document.querySelector("h3").classList.toggle("done");
        
        output:-
        true
        ------------------------
        console log:-
        document.querySelector("h3").classList.toggle("done");
        
        output:-
        false
        -------------------------
        console log:-
        document.querySelector("h3").classList.toggle("done");
        
        output:-
        true
        -------------------------
        console log:-
        document.querySelector("h3").classList.toggle("done");
        
        output:-
        false
        

























