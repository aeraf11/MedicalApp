import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function doctorsReducer(state = initialState.doctors, action) {
  switch (action.type) {
    case types.LOAD_DOCTORS_SUCCESS:
      return action.doctors;
    case types.CREATE_DOCTORS_SUCCESS:
      return [...state, { ...action.doctor }];
    case types.UPDATE_DOCTORS_SUCCESS:
      return state.map(doctor =>
        doctor.id === action.doctor.id ? action.doctor : doctor
      );
    case types.DELETE_DOCTORS_OPTIMISTIC:
      return state.filter(doctor => doctor.id !== action.doctor.id);
      default:
      return state;
  }
}
