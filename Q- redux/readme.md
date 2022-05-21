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

        export const CHANGE_SEARCHFIELD = "CHANGE_SEARCHFIELD";

* now we will create the reducer which is the big function that read the action and split out the state

* for that we will create the new file reducers.js

        import { CHANGE_SEARCH_FIELD } from "./constance.js";

        const initialState = {
            searchField : ""
        }

        export const searchRobots = (state = initialState, action={}) => {          // this is the reducer has the input of the state and action
            //now if we recived the action that is related to searching the robots then will act upon the state
            switch(action.type) {
                case: CHANGE_SEARCH_FIELD:
                    return Object.assign({}, state, searchField: action.payload);
                default:
                    return state;
            }
        }

