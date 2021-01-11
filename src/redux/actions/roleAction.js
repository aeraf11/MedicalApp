import * as types from "./actionTypes";
import * as rolesApi from "../../api/rolesApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadRolesSuccess(roles) {
  return { type: types.LOAD_ROLES_SUCCESS, roles };
}
export function createRoleSuccess(role) {
  return { type: types.CREATE_ROLES_SUCCESS, role };
}

export function updateRoleSuccess(role) {
  return { type: types.UPDATE_ROLES_SUCCESS, role };
}

export function deleteRoleOptimistic(role) {
  return { type: types.DELETE_ROLES_OPTIMISTIC, role };
}

export function loadRoles() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return rolesApi
      .getRoles()
      .then(roles => {
        dispatch(loadRolesSuccess(roles));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
export function saveRole(role) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    dispatch(beginApiCall());
    return rolesApi
      .saveRole(role)
      .then(savedRole => {
        role.id
          ? dispatch(updateRoleSuccess(savedRole))
          : dispatch(createRoleSuccess(savedRole));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteRole(role) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteRoleOptimistic(role));
    return rolesApi.deleteRole(role.id);
  };
}

