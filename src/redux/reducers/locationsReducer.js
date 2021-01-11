import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function locationsReducer(state = initialState.locations, action) {
  switch (action.type) {
    case types.LOAD_LOCATIONS_SUCCESS:
      return action.locations;
    case types.CREATE_LOCATIONS_SUCCESS:
      return [...state, { ...action.location }];
    case types.UPDATE_LOCATIONS_SUCCESS:
      return state.map(location =>
        location.id === action.location.id ? action.location : location
      );
    case types.DELETE_LOCATIONS_OPTIMISTIC:
      return state.filter(location => location.id !== action.location.id);
      default:
      return state;
  }
}
