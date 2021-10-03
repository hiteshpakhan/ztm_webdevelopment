this the react app that we practice for the first time 

the node_module is the folder that contains all the node data that we used into our project

# props

    props is an javascript object which we pass parent component to child component

    any values we pass at the time of calling the function component, 
    automatically the object props is been created and and attached that passed value to the property and the values to the props object
    for example:-
    <Func-Comp   val-name=value  />


    and we can use those props object values inside the child component file, 
    but first we have to declare the object at the time of the creating the function, 
    we have to put props name of object into the brackets of the function
    for example:-
    const fun-name = (props) => {......}

    and to use the props object values we can use the object name props dot the property name,
    here the property name is same as the name we gave to the value at the time of calling the func-component inside the parent component 
    for exoample:-
    {props.val-name}