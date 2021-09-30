// we create app.js to add the component 
// here we are creating our first component
// and the component is nothing but the single function on the page   
// it is not necessary but we can use the same name as our file name

import './App.css'; // this css file will only get attached to this component App  //in react we dont have to write export command inside the file 

//now we are importing the SubComponent of this file 
import SubComponent from './components/SubComponent';

function App(){
    // now this return is important because it will create our component
    return (
        <div className="app-container">
            <h1>this is our first step to React</h1>
            <SubComponent />
        </div>
        )
    // whenever you want to give the class like html remember that in JSX we use the className insted of class, where N is capital
    // it surely looks like the html but it is JSX
}

// now the main part of the this is we have to export this file so we can attached this file into index.js which will further attached it to the index.html 
export default App;  
// we make it default because now we can change its name if we want whenever importing it 



// function App(){
//     return <div>
//              <h1> first </h1>       //when you have more than one JSX tags you shoud wrap it into the one big tag like <div>
//              <p> second </p>        //remember this whenever you make a component you have to use the seprate css to each
//            </div>                   //for this App function component we are making the different App.css file you can change name but we choose this to easily recognise it 
// }
