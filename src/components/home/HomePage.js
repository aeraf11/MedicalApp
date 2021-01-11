import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Medical Centre App Administration</h1>
    <p>Medical Centre App aim is to provide a real-time service to connect Medical Centre, Doctors and Patients through appointment service and easy process.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
