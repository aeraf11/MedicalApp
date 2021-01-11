import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function rolesReducer(state = initialState.roles, action) {
  switch (action.type) {
    case types.LOAD_ROLES_SUCCESS:
      return action.roles;
    case types.CREATE_ROLES_SUCCESS:
      return [...state, { ...action.role }];
    case types.UPDATE_ROLES_SUCCESS:
      return state.map(role =>
        role.id === action.role.id ? action.role : role
      );
    case types.DELETE_ROLES_OPTIMISTIC:
      return state.filter(role => role.id !== action.role.id);
    default:
      return state;
  }
}
