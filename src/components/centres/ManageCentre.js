import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCentres, saveCentre } from "../../redux/actions/centreAction";
import { loadCentreTypes } from "../../redux/actions/centreTypeAction";
import { loadCentreAreas } from "../../redux/actions/centreAreaAction";
import { loadLocations, saveLocation } from "../../redux/actions/locationAction";
import PropTypes from "prop-types";
import CentreLocation from './CentreLocation';
import CentreForm from './CentreForm';
import {newCentre} from '../../../tools/mockData';
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageCentre ({
      centres
    , centreTypes
    , centreAreas
    , locations
    , loadCentres
    , loadLocations
    , loadCentreTypes
    , loadCentreAreas
    , history
    , saveCentre
    , ...props
}) {
    const [centre, setCentre] = useState({...props.centre});
    const [errors, setErrors] = useState({});
    useEffect( () => {
    if (centres.length === 0) {
      loadCentres().catch(error => {
        // console.log(centres)
        alert("Loading centres failed" + error);
      });
    }
    else {
        setCentre({...props.centre});
    }
    if (centreTypes.length === 0) {
      loadCentreTypes().catch(error => {
        alert("Loading types failed" + error);
      });
    }
    if (centreAreas.length === 0) {
        loadCentreAreas().catch(error => {
          alert("Loading areas failed" + error);
        });
      }

      if (locations.length === 0) {
        loadLocations().catch(error => {
          alert("Loading authors failed" + error);
        });
      }

      }, [props.centre]);

      function handleChange(event) {
        const { name, value } = event.target;
        setCentre(prevCentre => ({
          ...prevCentre
          , [name]: name === "locationId" ? parseInt(value, 10) 
          : name === "areaId" ? parseInt(value, 10) 
          : name === "typeId" ? parseInt(value, 10) : value
        }));
      }

      function handleSave(event) {
        event.preventDefault();
        // if (!formIsValid()) return;
        // setSaving(true);
        var changedCentre = {id:centre.id, name: centre.name, typeId: centre.typeId, areaId: centre.areaId, locationId: centre.locationId};
        saveCentre(changedCentre)
          .then(() => {
            toast.success("Centre saved.");
            history.push("/centres");
          })
          .catch(error => {
            // setSaving(false);
            setErrors({ onSave: error.message });
          });
      }
      function setCentreValues(){
        if(centre && locations && locations.length ){
          centre.location = locations.find(l => l.id === centre.locationId);
          centre.area = centreAreas.find(a => a.id === centre.areaId);
          centre.type = centreTypes.find(t => t.id === centre.typeId);
          // console.log(centre);
        }
      }
      // function setLocationValues(){
      //   if(centre && locations && locations.length && centreAreas && centreAreas.length ){
      //     locations.forEach(l => {
      //       var selectedArea = centreAreas.filter(a => a.id === l.areaId)
      //       if(selectedArea && l.id > 0){
      //         l.areaName = selectedArea[0].name;
      //       }            
      //     });
      //   }
      // }
    return (
      <>
            <h2>{centre.name}</h2>

        {
          setCentreValues(),
          //setLocationValues(),
        props.loading ? (
          <Spinner />
        ) : 
        (
          <>

            <div className="clinic-appointment-body">
            <div className="appointment-location">
                { centre.location ? <CentreLocation location={centre.location}/> : <div/> }
            </div>
            {centre.id && !centre.region ? location.reload(): 
            <CentreForm 
            centre={centre} 
            errors={errors} 
            locations= {centre.areaId ? locations.filter(l => l.areaId === centre.areaId): locations}
            regions={[...new Set(centreAreas.map(r => r.region))]}
            centreTypes= {centreTypes}
            centreAreas= {centre.region ? centreAreas.filter(ca => ca.region === centre.region): centreAreas}
            onChange={handleChange}
            onSave={handleSave}
            />}
            </div>
          </>
        )}
      </>
    );

}

ManageCentre.propTypes = {
    centre: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
  centres: PropTypes.array.isRequired,
  centreTypes: PropTypes.array.isRequired,
  centreAreas: PropTypes.array.isRequired,
  saveCentre: PropTypes.func.isRequired,
  saveLocation: PropTypes.func.isRequired,
  loadCentres: PropTypes.func.isRequired,
  loadLocations: PropTypes.func.isRequired,
  loadCentreTypes: PropTypes.func.isRequired,
  loadCentreAreas: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

export function getCentreById(centres, id){
    return centres.find(centre => centre.id === parseInt(id)) || null;
}

function mapStateToProps(state, ownProps) {
    var locId = ownProps.location.pathname ? ownProps.location.pathname.split('/')[2] : 0;
    const id = locId
    const centre = id && state.centres.length > 0 ? getCentreById(state.centres, id) : newCentre
  return {
      centre,
    centres: state.centres,
    locations: state.locations,
    centreTypes: state.centreTypes,
    centreAreas: state.centreAreas
    , loading: state.apiCallsInProgress > 0
  }
}

const mapDispatchToProps = {
        loadCentres
      , loadLocations
      , loadCentreTypes
      , loadCentreAreas
      , saveCentre
      , saveLocation
    }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCentre);
