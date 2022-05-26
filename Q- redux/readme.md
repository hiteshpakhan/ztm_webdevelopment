* to install the redux 

        npm install redux

* to connect redux to the react we need the another package

        npm install react-redux

* somer people hate about the redux that it has more boilear plate code means that you have to use more new commands 
* but the benifit of this is it make our code more scalable 

* redux has the flow like (action -> reducer -> store -> make changes)

# step that we take to understand the redux

* create action and reducer 

* we have create the file in src folder actions.js

        import { CHANGE_SEARCH_FIELD } from "./constance.js";

        export const setSearchField = (text) => ({
            type: CHANGE_SEARCH_FIELD,        //type will be hold the dumy name of your action that useually programmers save inside the another file if you have more than one action you can easily find the names at one place
            payload: text                       //here the payload will be the whatever changes that are in the text field
        })

* here we will create the constance.js file to store the name of the actions and then export them

        export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCHFIELD";

* now we will create the reducer which is the big function that read the action and split out the state

* for that we will create the new file reducers.js

        import { CHANGE_SEARCH_FIELD } from "./constance.js";

        const initialState = {
            searchField : ""
        }

        export const searchRobots = (state = initialState, action={}) => {          // this is the reducer has the input of the state and action
            //now if we recived the action that is related to searching the robots then will act upon the state
            switch(action.type) {
                case CHANGE_SEARCH_FIELD:
                    return Object.assign({}, state, { searchField: action.payload });
                default:
                    return state;
            }
        }

* now that we have created the redux part but we have to connect it to the react 

* for this we have installed the package react-redux that gives us the two api 1.Provider and 2.connect

* for this you have to import this into the index.js

        import {Provider, connect} from "react-redux";

* we also have the store which is th estore of all truth , and you can create the store by following inside the index.js

        import { createStore } from "redux";

        const store = createStore( rootReducer )        //the rootReducer which is the reducer of our app which contains all the reducers of our app for example the searchRobots reducer

        //but here we only have one reducer so we can directly put the reducer at the place of rootReducer

        import { searchRobots } from "./reducers";
        const store = createStore( searchRobots )       // now this store can be accessed and pass to the <App />

        //by this we can remove all the state from the react app and keep it into the store and pass the store as a props

* to pass the store to the app we have imported the provider 

        //inside index.js
        <provider store={store}> //the provider component will automaticly pass down the store to all the component beneth it
            <App />
        </provider>,
        ...