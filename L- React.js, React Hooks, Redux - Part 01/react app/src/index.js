// # sigma rule of react : whatever you add to this index.js file it direct combines with the root element of the index.html and directly access by the browser

import ReactDom from "react-dom";   //inside the react inside the index.js it is compulsary that you import ReactDom

import './index.css'                //we shoud add the css file that will remain same for the intire project   //we can add css files also within the react

import App from './App' //we didnot use {qurly basis} for the App function because it default  //we did not have to give .js extention to the location './App' because we use default
// to pass the App component to index.html we have to put it into ReactDom.render 
// and we shoud write it like the html tag <component_name />
// but it shoud have first letter capital and backslash after it
// by this it become easire to different between the html tag and react component



ReactDom.render(<App />, document.getElementById('root'));  //render is an method of the ReactDom object  //it is compulsary to pass two parameters to it 


