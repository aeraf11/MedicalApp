import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function centreAreasReducer(state = initialState.centreAreas, action) {
  switch (action.type) {
    case types.LOAD_CENTREAREAS_SUCCESS:
      return action.centreAreas;
    default:
      return state;
  }
}
