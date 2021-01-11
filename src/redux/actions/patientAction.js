import * as types from "./actionTypes";
import * as patientsApi from "../../api/patientsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadPatientsSuccess(patients) {
  return { type: types.LOAD_PATIENTS_SUCCESS, patients };
}
export function createPatientSuccess(patient) {
  return { type: types.CREATE_PATIENTS_SUCCESS, patient };
}

export function updatePatientSuccess(patient) {
  return { type: types.UPDATE_PATIENTS_SUCCESS, patient };
}

export function deletePatientOptimistic(patient) {
  return { type: types.DELETE_PATIENTS_OPTIMISTIC, patient };
}

export function loadPatients() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return patientsApi
      .getPatients()
      .then(patients => {
        dispatch(loadPatientsSuccess(patients));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
export function savePatient(patient) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return patientsApi
      .savePatient(patient)
      .then(savedPatient => {
        patient.id
          ? dispatch(updatePatientSuccess(savedPatient))
          : dispatch(createPatientSuccess(savedPatient));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deletePatient(patient) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deletePatientOptimistic(patient));
    return patientsApi.deletePatient(patient.id);
  };
}
