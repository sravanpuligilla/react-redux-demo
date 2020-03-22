import types from "./types";
import { combineReducers } from "redux";


const initialState = {
  serviceDetailsData: {},
};

const serviceDetailsList = (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.SERVICES_LOADED:
      return {
        ...initialState,
        ...action.res
      };
    default:
      return state;
  }
};

export const actions = {

    getControlService: () => async dispatch => {
      
      const res = await fetch("https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services")
      .then(response => response.json());
        
          dispatch({ 
            type: types.SERVICES_LOADED,
            res: { serviceDetailsData: res.data }
          });
    }
  
  }

export default combineReducers({
    serviceDetailsList
});
