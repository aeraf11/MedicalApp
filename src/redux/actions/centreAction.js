import * as types from "./actionTypes";
import * as centresApi from "../../api/centresApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCentresSuccess(centres) {
  return { type: types.LOAD_CENTRES_SUCCESS, centres };
}

export function createCentreSuccess(centre) {
  return { type: types.CREATE_CENTRES_SUCCESS, centre };
}

export function updateCentreSuccess(centre) {
  return { type: types.UPDATE_CENTRES_SUCCESS, centre };
}

export function deleteCentreOptimistic(centre) {
  return { type: types.DELETE_CENTRES_OPTIMISTIC, centre };
}


export function loadCentres() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return centresApi
      .getCentres()
      .then(centres => {
        dispatch(loadCentresSuccess(centres));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
export function saveCentre(centre) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return centresApi
      .saveCentre(centre)
      .then(savedCentre => {
        centre.id
          ? dispatch(updateCentreSuccess(savedCentre))
          : dispatch(createCentreSuccess(savedCentre));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteCentre(centre) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteCentreOptimistic(centre));
    return centresApi.deleteCentre(centre.id);
  };
}