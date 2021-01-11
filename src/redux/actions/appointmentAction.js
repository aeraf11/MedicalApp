import * as types from "./actionTypes";
import * as appointmentsApi from "../../api/appointmentsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAppointmentsSuccess(appointments) {
  return { type: types.LOAD_APPOINTMENTS_SUCCESS, appointments };
}
export function createAppointmentSuccess(appointment) {
  return { type: types.CREATE_APPOINTMENTS_SUCCESS, appointment };
}

export function updateAppointmentSuccess(appointment) {
  return { type: types.UPDATE_APPOINTMENTS_SUCCESS, appointment };
}

export function deleteAppointmentOptimistic(appointment) {
  return { type: types.DELETE_APPOINTMENTS_OPTIMISTIC, appointment };
}

export function loadAppointments() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return appointmentsApi
      .getAppointments()
      .then(appointments => {
        dispatch(loadAppointmentsSuccess(appointments));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
export function saveAppointment(appointment) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return appointmentsApi
      .saveAppointment(appointment)
      .then(savedAppointment => {
        appointment.id
          ? dispatch(updateAppointmentSuccess(savedAppointment))
          : dispatch(createAppointmentSuccess(savedAppointment));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteAppointment(appointment) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteAppointmentOptimistic(appointment));
    return appointmentsApi.deleteAppointment(appointment.id);
  };
}
