import * as types from "./actionTypes";
import * as eventsApi from "../../api/eventsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadEventsSuccess(events) {
  return { type: types.LOAD_EVENTS_SUCCESS, events };
}
export function createEventSuccess(event) {
  return { type: types.CREATE_EVENTS_SUCCESS, event };
}

export function updateEventSuccess(event) {
  return { type: types.UPDATE_EVENTS_SUCCESS, event };
}

export function deleteEventOptimistic(event) {
  return { type: types.DELETE_EVENTS_OPTIMISTIC, event };
}

export function loadEvents() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return eventsApi
      .getEvents()
      .then(events => {
        dispatch(loadEventsSuccess(events));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
export function saveEvent(event) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return eventsApi
      .saveEvent(event)
      .then(savedEvent => {
        event.id
          ? dispatch(updateEventSuccess(savedEvent))
          : dispatch(createEventSuccess(savedEvent));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteEvent(event) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteEventOptimistic(event));
    return eventsApi.deleteEvent(event.id);
  };
}
