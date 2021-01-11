import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function eventsReducer(state = initialState.events, action) {
  switch (action.type) {
    case types.LOAD_EVENTS_SUCCESS:
      return action.events;
    case types.CREATE_EVENTS_SUCCESS:
      return [...state, { ...action.event }];
    case types.UPDATE_EVENTS_SUCCESS:
      return state.map(event =>
        event.id === action.event.id ? action.event : event
      );
    case types.DELETE_EVENTS_OPTIMISTIC:
      return state.filter(event => event.id !== action.event.id);
      default:
      return state;
  }
}
