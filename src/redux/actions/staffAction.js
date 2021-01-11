import * as types from "./actionTypes";
import * as staffApi from "../../api/staffApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadStaffSuccess(staff) {
  return { type: types.LOAD_STAFF_SUCCESS, staff };
}
export function createStaffSuccess(staff) {
  return { type: types.CREATE_STAFFS_SUCCESS, staff };
}

export function updateStaffSuccess(staff) {
  return { type: types.UPDATE_STAFFS_SUCCESS, staff };
}

export function deleteStaffOptimistic(staff) {
  return { type: types.DELETE_STAFFS_OPTIMISTIC, staff };
}

export function loadStaffs() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return staffApi
      .getStaff()
      .then(staff => {
        dispatch(loadStaffSuccess(staff));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
export function saveStaff(staff) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return staffApi
      .saveStaff(staff)
      .then(savedStaff => {
        staff.id
          ? dispatch(updateStaffSuccess(savedStaff))
          : dispatch(createStaffSuccess(savedStaff));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteStaff(staff) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteStaffOptimistic(staff));
    return staffApi.deleteStaff(staff.id);
  };
}

