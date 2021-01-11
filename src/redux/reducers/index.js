import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import roles from "./rolesReducer";
import staff from "./staffReducer";
import doctors from "./doctorsReducer";
import events from "./eventsReducer";
import appointments from "./appointmentsReducer";
import locations from "./locationsReducer";
import centres from "./centresReducer";
import centreTypes from "./centreTypesReducer";
import centreAreas from "./centreAreasReducer";
import patients from "./patientsReducer";
import diseases from "./diseasesReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  roles,
  staff,
  doctors,
  events,
  appointments,
  locations,
  centres,
  centreTypes,
  centreAreas,
  patients,
  diseases,
  apiCallsInProgress
});

export default rootReducer;
