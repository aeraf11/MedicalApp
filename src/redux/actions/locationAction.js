import * as types from "./actionTypes";
import * as locationsApi from "../../api/locationsApi";
import * as centreAreasApi from "../../api/centreAreasApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadLocationsSuccess(locations) {
  return { type: types.LOAD_LOCATIONS_SUCCESS, locations };
}
export function createLocationSuccess(location) {
  return { type: types.CREATE_LOCATIONS_SUCCESS, location };
}

export function updateLocationSuccess(location) {
  return { type: types.UPDATE_LOCATIONS_SUCCESS, location };
}

export function deleteLocationOptimistic(location) {
  return { type: types.DELETE_LOCATIONS_OPTIMISTIC, location };
}

export function loadLocations() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return locationsApi
      .getLocations()
      .then(locations => {
        return centreAreasApi.getCentreAreas()
        .then(careas => {
          // console.log(careas);
          locations.forEach(l => {
            var locArea = careas.filter(ca => ca.id === l.areaId)
            if(locArea && locArea.length){
              l.areaName = locArea[0].name;
              l.region =locArea[0].region;
            }            
          });
          dispatch(loadLocationsSuccess(locations));
        });
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveLocation(location) {
  // debugger;
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return locationsApi
      .saveLocation(location)
      .then(savedLocation => {
        location.id
          ? dispatch(updateLocationSuccess(savedLocation))
          : dispatch(createLocationSuccess(savedLocation));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteLocation(location) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteLocationOptimistic(location));
    return locationsApi.deleteLocation(location.id);
  };
}
