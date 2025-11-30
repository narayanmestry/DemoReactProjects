import { getUserService } from "../services/userService";

// action type
export const TOGGLE_COLOR = "TOGGLE_COLOR";
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";


// action creators
export const toggleColor = () => ({ type: TOGGLE_COLOR });

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
     
      const data = await getUserService(); // calling service function
      dispatch({ type: SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};


// Step 1 - to writer action types
// Step 2 - action creators
