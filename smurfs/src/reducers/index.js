/*
  Be sure to import in all of the action types from `../actions`
*/
import { GATHERING, CAUGHT, FAILED, ADD, REMOVE } from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  gathering: false,
  error: null
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GATHERING:
      return { ...state, gathering: true };
    case CAUGHT:
      return {
        ...state,
        smurfs: action.payload,
        gathering: false
      };
    case ADD:
      return {
        ...state,
        smurfs: state.smurfs.concat(action.payload)
      };
    case FAILED:
      return { ...state, gathering: false, error: action.payload };
    case REMOVE:
      return { ...state, smurfs: state.smurfs.filter(action.payload) };
    default:
      return state;
  }
}

export default rootReducer;
