import * as types from "./actionTypes";
import * as diseasesApi from "../../api/diseasesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadDiseasesSuccess(diseases) {
  return { type: types.LOAD_DISEASES_SUCCESS, diseases };
}
export function createDiseaseSuccess(disease) {
  return { type: types.CREATE_DISEASES_SUCCESS, disease };
}

export function updateDiseaseSuccess(disease) {
  return { type: types.UPDATE_DISEASES_SUCCESS, disease };
}

export function deleteDiseaseOptimistic(disease) {
  return { type: types.DELETE_DISEASES_OPTIMISTIC, disease };
}

export function loadDiseases() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return diseasesApi
      .getDiseases()
      .then(diseases => {
        dispatch(loadDiseasesSuccess(diseases));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
export function saveDisease(disease) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return diseasesApi
      .saveDisease(disease)
      .then(savedDisease => {
        disease.id
          ? dispatch(updateDiseaseSuccess(savedDisease))
          : dispatch(createDiseaseSuccess(savedDisease));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteDisease(disease) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteDiseaseOptimistic(disease));
    return diseasesApi.deleteDisease(disease.id);
  };
}
