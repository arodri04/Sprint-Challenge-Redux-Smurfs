import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GATHERING = "GATHERING";
export const CAUGHT = "CAUGHT";
export const FAILED = "FAILED";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const Smurfs = () => dispatch => {
  dispatch({ type: GATHERING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(({ data }) => {
      dispatch({
        type: CAUGHT,
        payload: data
      });
    })
    .catch(error => {
      dispatch({ type: FAILED, payload: error });
    });
};

export const addSmurf = newchar => dispatch => {
  console.log("IN ADD CHAR", newchar);
  axios
    .post("http://localhost:3333/smurfs", newchar)
    .then(data => {
      dispatch({ type: ADD, payload: newchar });
    })
    .catch(error => {
      console.log("this is erroor", error);
    });
};

export const Remove = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(data => {
      dispatch({ type: REMOVE, payload: id });
    })
    .catch(err => console.log(err));
};
