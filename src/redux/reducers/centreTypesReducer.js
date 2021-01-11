import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function centreTypesReducer(state = initialState.centreTypes, action) {
  switch (action.type) {
    case types.LOAD_CENTRETYPES_SUCCESS:
      return action.centreTypes;
    default:
      return state;
  }
}
