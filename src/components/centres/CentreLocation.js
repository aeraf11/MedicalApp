import React from "react";
import PropTypes from "prop-types";

const CentreLocation = ({ location }) => (
    <div>
        <div>{location.address}</div>
        <div>{location.region}</div>
        <div>{location.city}</div>
        <div>{location.postcode}</div>
        <div>{location.phone}</div>
    </div>
);

CentreLocation.propTypes = {
    location: PropTypes.object.isRequired
};
  
export default CentreLocation;