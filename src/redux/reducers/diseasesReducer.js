import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function diseasesReducer(state = initialState.diseases, action) {
  switch (action.type) {
    case types.LOAD_DISEASES_SUCCESS:
      return action.diseases;
    case types.CREATE_DISEASES_SUCCESS:
      return [...state, { ...action.disease }];
    case types.UPDATE_DISEASES_SUCCESS:
      return state.map(disease =>
        disease.id === action.disease.id ? action.disease : disease
      );
    case types.DELETE_DISEASES_OPTIMISTIC:
      return state.filter(disease => disease.id !== action.disease.id);
      default:
      return state;
  }
}
