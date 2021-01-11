import * as types from "./actionTypes";
import * as centreTypesApi from "../../api/centreTypesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCentreTypesSuccess(centreTypes) {
  return { type: types.LOAD_CENTRETYPES_SUCCESS, centreTypes };
}

export function loadCentreTypes() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return centreTypesApi
      .getCentreTypes()
      .then(centreTypes => {
        dispatch(loadCentreTypesSuccess(centreTypes));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
