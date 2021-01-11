import * as types from "./actionTypes";
import * as doctorsApi from "../../api/doctorsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadDoctorsSuccess(doctors) {
  return { type: types.LOAD_DOCTORS_SUCCESS, doctors };
}
export function createDoctorSuccess(doctor) {
  return { type: types.CREATE_DOCTORS_SUCCESS, doctor };
}

export function updateDoctorSuccess(doctor) {
  return { type: types.UPDATE_DOCTORS_SUCCESS, doctor };
}

export function deleteDoctorOptimistic(doctor) {
  return { type: types.DELETE_DOCTORS_OPTIMISTIC, doctor };
}

export function loadDoctors() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return doctorsApi
      .getDoctors()
      .then(doctors => {
        dispatch(loadDoctorsSuccess(doctors));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
export function saveDoctor(doctor) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return doctorsApi
      .saveDoctor(doctor)
      .then(savedDoctor => {
        doctor.id
          ? dispatch(updateDoctorSuccess(savedDoctor))
          : dispatch(createDoctorSuccess(savedDoctor));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteDoctor(doctor) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteDoctorOptimistic(doctor));
    return doctorsApi.deleteDoctor(doctor.id);
  };
}
