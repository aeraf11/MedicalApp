import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function staffReducer(state = initialState.staff, action) {
  switch (action.type) {
    case types.LOAD_STAFF_SUCCESS:
      return action.staff;
    case types.LOAD_ROLES_SUCCESS:
      return action.roles;
    case types.CREATE_STAFFS_SUCCESS:
      return [...state, { ...action.staff }];
    case types.UPDATE_STAFFS_SUCCESS:
      return state.map(staff =>
        staff.id === action.staff.id ? action.staff : staff
      );
    case types.DELETE_STAFFS_OPTIMISTIC:
      return state.filter(staff => staff.id !== action.staff.id);
      default:
      return state;
  }
}
