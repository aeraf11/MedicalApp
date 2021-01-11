import * as types from "./actionTypes";
import * as centreAreasApi from "../../api/centreAreasApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCentreAreasSuccess(centreAreas) {
  return { type: types.LOAD_CENTREAREAS_SUCCESS, centreAreas };
}

export function loadCentreAreas() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return centreAreasApi
      .getCentreAreas()
      .then(centreAreas => {
        dispatch(loadCentreAreasSuccess(centreAreas));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
