import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function patientsReducer(state = initialState.patients, action) {
  switch (action.type) {
    case types.LOAD_PATIENTS_SUCCESS:
      return action.patients;
    case types.LOAD_ROLES_SUCCESS:
      return action.roles;
    case types.CREATE_PATIENTS_SUCCESS:
      return [...state, { ...action.patient }];
    case types.UPDATE_PATIENTS_SUCCESS:
      return state.map(patient =>
        patient.id === action.patient.id ? action.patient : patient
      );
    case types.DELETE_PATIENTS_OPTIMISTIC:
      return state.filter(patient => patient.id !== action.patient.id);
      default:
      return state;
  }
}
