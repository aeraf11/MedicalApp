import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/roles/";

export function getRoles() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveRole(role) {
  return fetch(baseUrl + (role.id || ""), {
    method: role.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(role)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteRole(roleId) {
  return fetch(baseUrl + roleId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}