import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function centresReducer(state = initialState.centres, action) {
  switch (action.type) {
    case types.CREATE_CENTRES_SUCCESS:
      return [...state, { ...action.centre }];
    case types.UPDATE_CENTRES_SUCCESS:
      return state.map(centre =>
        centre.id === action.centre.id ? action.centre : centre
      );
    case types.LOAD_CENTRES_SUCCESS:
      return action.centres;
      case types.DELETE_CENTRES_OPTIMISTIC:
        return state.filter(centre => centre.id !== action.centre.id);
    default:
      return state;
  }
}
