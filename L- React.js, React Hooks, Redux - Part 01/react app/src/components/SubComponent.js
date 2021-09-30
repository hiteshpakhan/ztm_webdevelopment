// it will be the SubComponent of the component App
// you can change name of the file as you please

import './SubComponent.css'          //when you want to import the js file it does not important to give .js extentation because it take it by default 
// but when it is another file it must include its extentation

// you can also take whatever name to component function but we are taking the same name as the file name to be better remembet it
function SubComponent(){
    return (
        <p className="sub-component">this is SubComponent</p>
    );
}
export default SubComponent;   //we are exporting this to import it into the parent component App     