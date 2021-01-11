import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function appointmentsReducer(state = initialState.appointments, action) {
  switch (action.type) {
    case types.LOAD_APPOINTMENTS_SUCCESS:
      return action.appointments;
    case types.CREATE_APPOINTMENTS_SUCCESS:
      return [...state, { ...action.appointment }];
    case types.UPDATE_APPOINTMENTS_SUCCESS:
      return state.map(appointment =>
        appointment.id === action.appointment.id ? action.appointment : appointment
      );
    case types.DELETE_APPOINTMENTS_OPTIMISTIC:
      return state.filter(appointment => appointment.id !== action.appointment.id);
    default:
      return state;
  }
}
