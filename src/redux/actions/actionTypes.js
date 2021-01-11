export const CREATE_COURSE = "CREATE_COURSE";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_CENTRES_SUCCESS = "LOAD_CENTRES_SUCCESS";
export const LOAD_CENTRETYPES_SUCCESS = "LOAD_CENTRETYPES_SUCCESS";
export const LOAD_CENTREAREAS_SUCCESS = "LOAD_CENTREAREAS_SUCCESS";
export const LOAD_LOCATIONS_SUCCESS = "LOAD_LOCATIONS_SUCCESS";
export const LOAD_DISEASES_SUCCESS = "LOAD_DISEASES_SUCCESS";
export const LOAD_PATIENTS_SUCCESS = "LOAD_PATIENTS_SUCCESS";
export const LOAD_DOCTORS_SUCCESS = "LOAD_DOCTORS_SUCCESS";
export const LOAD_EVENTS_SUCCESS = "LOAD_EVENTS_SUCCESS";
export const LOAD_APPOINTMENTS_SUCCESS = "LOAD_APPOINTMENTS_SUCCESS";
export const LOAD_ROLES_SUCCESS = "LOAD_ROLES_SUCCESS";
export const LOAD_STAFF_SUCCESS = "LOAD_STAFF_SUCCESS";
export const CREATE_CENTRES_SUCCESS = "CREATE_CENTRES_SUCCESS";
export const CREATE_LOCATIONS_SUCCESS = "CREATE_LOCATIONS_SUCCESS";
export const CREATE_DISEASES_SUCCESS = "CREATE_DISEASES_SUCCESS";
export const CREATE_PATIENTS_SUCCESS = "CREATE_PATIENTS_SUCCESS";
export const CREATE_DOCTORS_SUCCESS = "CREATE_DOCTORS_SUCCESS";
export const CREATE_EVENTS_SUCCESS = "CREATE_EVENTS_SUCCESS";
export const CREATE_APPOINTMENTS_SUCCESS = "CREATE_APPOINTMENTS_SUCCESS";
export const CREATE_ROLES_SUCCESS = "CREATE_ROLES_SUCCESS";
export const CREATE_STAFFS_SUCCESS = "CREATE_STAFFS_SUCCESS";
export const UPDATE_CENTRES_SUCCESS = "UPDATE_CENTRES_SUCCESS";
export const UPDATE_LOCATIONS_SUCCESS = "UPDATE_LOCATIONS_SUCCESS";
export const UPDATE_DISEASES_SUCCESS = "UPDATE_DISEASES_SUCCESS";
export const UPDATE_PATIENTS_SUCCESS = "UPDATE_PATIENTS_SUCCESS";
export const UPDATE_DOCTORS_SUCCESS = "UPDATE_DOCTORS_SUCCESS";
export const UPDATE_EVENTS_SUCCESS = "UPDATE_EVENTS_SUCCESS";
export const UPDATE_APPOINTMENTS_SUCCESS = "UPDATE_APPOINTMENTS_SUCCESS";
export const UPDATE_ROLES_SUCCESS = "UPDATE_ROLES_SUCCESS";
export const UPDATE_STAFFS_SUCCESS = "UPDATE_STAFFS_SUCCESS";
export const DELETE_CENTRES_OPTIMISTIC = "DELETE_CENTRES_OPTIMISTIC";
export const DELETE_LOCATIONS_OPTIMISTIC = "DELETE_LOCATIONS_OPTIMISTIC";
export const DELETE_DISEASES_OPTIMISTIC = "DELETE_DISEASES_OPTIMISTIC";
export const DELETE_PATIENTS_OPTIMISTIC = "DELETE_PATIENTS_OPTIMISTIC";
export const DELETE_DOCTORS_OPTIMISTIC = "DELETE_DOCTORS_OPTIMISTIC";
export const DELETE_EVENTS_OPTIMISTIC = "DELETE_EVENTS_OPTIMISTIC";
export const DELETE_APPOINTMENTS_OPTIMISTIC = "DELETE_APPOINTMENTS_OPTIMISTIC";
export const DELETE_ROLES_OPTIMISTIC = "DELETE_ROLES_OPTIMISTIC";
export const DELETE_STAFFS_OPTIMISTIC = "DELETE_STAFFS_OPTIMISTIC";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";
