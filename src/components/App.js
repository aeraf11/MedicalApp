import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import CentresPage from "./centres/CentresPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import ManageCentre from "./centres/ManageCentre";
import ManageLocation from "./locations/ManageLocation";
import ManageClinicAppointmentPage from "./centres/ManageClinicAppointmentPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route path="/centres" component={CentresPage} />
        <Route path="/centre/:id" component={ManageClinicAppointmentPage} />
        <Route path="/centre" component={ManageClinicAppointmentPage} />
        <Route path="/centreedit" component={ManageCentre} />
        <Route path="/centreedit/:id" component={ManageCentre} />
        <Route path="/location" component={ManageLocation} />
        <Route path="/location/:id" component={ManageLocation} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
