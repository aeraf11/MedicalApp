import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadLocations, saveLocation } from "../../redux/actions/locationAction";
import { loadCentres} from "../../redux/actions/centreAction";
import { loadCentreAreas} from "../../redux/actions/centreAreaAction";
import PropTypes from "prop-types";
import LocationForm from "./LocationForm";
import { newLocation } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageLocation({
    centres,
    centreAreas,
  locations,
  loadLocations,
  loadCentres,
  loadCentreAreas,
  saveLocation,
  history,
  ...props
}) {
  const [location, setLocation] = useState({ ...props.location });
  const [centre, setCentre] = useState({ ...props.centre });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (locations.length === 0) {
      loadLocations().catch(error => {
        alert("Loading locations failed" + error);
      });
    } else {
      setLocation({ ...props.location });
    }
    if (centres.length === 0) {
        loadCentres().catch(error => {
          alert("Loading centres failed" + error);
        });
      } else{
          setCentre({...props.centre});
      }
    if (centreAreas.length === 0) {
        loadCentreAreas().catch(error => {
          alert("Loading centres failed" + error);
        });
      }
  }, [props.location, props.centre]);

  function handleChange(event) {
    //   debugger;
    const { name, value } = event.target;
    setLocation(prevLocation => ({
      ...prevLocation,
      [name]
      : name === "areaId" ? parseInt(value, 10) 
      : value
    }));
  }

  function formIsValid() {
    const { address, city } = location;
    const errors = {};

    if (!address) errors.address = "Address is required.";
    //if (!town) errors.town = "Town is required";
    if (!city) errors.city = "City is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    //   debugger;
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    var changedLocation ={
        id: location.id?location.id: 0
        , address: location.address
        , region: location.areaId? centreAreas.find(a => a.id === location.areaId).region : ''
        , areaId: location.areaId
        , city: location.city
        , postcode: location.postcode
        , state: location.state
        , country: location.country
        , phone:location.phone
    }

    saveLocation(changedLocation)
      .then(() => {
          var centre = centres.find(c => c.locationId == location.id);
          toast.success("Location saved.");
          if(centre){
            var centreId = centre.id
            history.push("/centreedit/" + centreId);
        }
        else{
            history.push("/centreedit");
        }
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return locations.length === 0 ? (
    <Spinner />
  ) : (
    <LocationForm
      location={location}
      centre={centre}
      regions={[...new Set(centreAreas.map(r => r.region))]}
      centreAreas={centreAreas.filter(ca => ca.region === location.region)}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
      errors={errors}
    />
  );
}

ManageLocation.propTypes = {
  location: PropTypes.object.isRequired,
  centre: PropTypes.object,
  locations: PropTypes.array.isRequired,
  regions: PropTypes.array,
  centres: PropTypes.array.isRequired,
  centreAreas: PropTypes.array.isRequired,
  loadLocations: PropTypes.func.isRequired,
  loadCentres: PropTypes.func.isRequired,
  loadCentreAreas: PropTypes.func.isRequired,
  saveLocation: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getLocationById(locations, id) {
  return locations.find(location => location.id === id) || null;
}

function mapStateToProps(state, ownProps) {
    // debugger
    var locId = ownProps.location.pathname ? ownProps.location.pathname.split('/')[2] : 0;
    const id = parseInt(locId)//ownProps.match.params.id;
    const location =
        id && state.locations.length > 0
        ? getLocationById(state.locations, id)
        : newLocation;
    const centre = state.centres.find(c => c.locationId === id);
  return {
    location,
    centre,
    locations: state.locations
    , centres: state.centres
    , centreAreas: state.centreAreas
  };
}

const mapDispatchToProps = {
  loadLocations,
  loadCentres,
  loadCentreAreas,
  saveLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageLocation);
