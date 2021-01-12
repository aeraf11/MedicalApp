import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCentres, saveCentre } from "../../redux/actions/centreAction";
import { loadCentreTypes } from "../../redux/actions/centreTypeAction";
import { loadCentreAreas } from "../../redux/actions/centreAreaAction";
import { loadLocations } from "../../redux/actions/locationAction";
import { loadStaffs } from "../../redux/actions/staffAction";
import { loadDoctors } from "../../redux/actions/doctorAction";
import { loadPatients } from "../../redux/actions/patientAction";
import { loadEvents } from "../../redux/actions/eventAction";
import { loadAppointments } from "../../redux/actions/appointmentAction";
import PropTypes from "prop-types";
import CentreForm from './CentreForm';
//import AppointmentForm from './AppointmentForm';
import CentreLocation from './CentreLocation';
import CentreDoctors from './CentreDoctors';
import CentreEvents from './CentreEvents';
import CentreAppointments from './CentreAppointments';
import {newCentre} from '../../../tools/mockData';
// import { Redirect } from "react-router-dom";
// import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageClinicAppointmentPage ({
    centres
    , selectedDoctorId
    , selectedEventId
    , centreTypes
    , centreAreas
    , locations
    , loadCentres
    , loadLocations
    , loadCentreTypes
    , loadCentreAreas
    , staff
    , doctors
    , patients
    , events
    , appointments
    , loadStaffs
    , loadDoctors
    , loadPatients
    , loadEvents
    , loadAppointments
    , history
    , saveCentre
    , ...props
}) {
    const [centre, setCentre] = useState({...props.centre});
    const [docId, setDocId] = useState({...props.docId});
    const [evtId, setEvtId] = useState({...props.evtId});
    const [errors, setErrors] = useState({});
    useEffect( () => {
        selectedDoctorId = 0;
        selectedEventId = 0;
    if (centres.length === 0) {
      loadCentres().catch(error => {
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

    // if(!docId){
    //     //docId = 0;
    // }else {
        setDocId({...props.docId});
        setEvtId({...props.evtId});
    // }
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

      if (staff.length === 0) {
        loadStaffs().catch(error => {
          alert("Loading staff failed" + error);
        });
      }

      if (doctors.length === 0) {
        loadDoctors().catch(error => {
          alert("Loading doctors failed" + error);
        });
      }

      if (patients.length === 0) {
        loadPatients().catch(error => {
          alert("Loading patients failed" + error);
        });
      }

      if (events.length === 0) {
        loadEvents().catch(error => {
          alert("Loading events failed" + error);
        });
      }
      if (appointments.length === 0) {
        loadAppointments().catch(error => {
          alert("Loading appointment failed" + error);
        });
      }
      }, [props.centre, props.docId, props.evtId]);

      function handleChange(event) {
        const { name, value } = event.target;
        setCentre(prevCentre => ({
          ...prevCentre, 
          [name]: name === "locationId" ? parseInt(value, 10) 
          : name === "typeId" ? parseInt(value, 10) 
          : name === "areaId" ? parseInt(value, 10) 
          : value
        }));
      }

      function handleSave(event) {
        event.preventDefault();
        // if (!formIsValid()) return;
        // setSaving(true);
        saveCentre(centre)
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
        if(centre && locations && staff && doctors && events && appointments
          && locations.length && staff.length && doctors.length && events.length && appointments.length)
        centre.location = locations.find(l => l.id === centre.locationId);
        centre.staffs = staff.filter(s => s.centreId === centre.id);
        centre.doctors = doctors.filter(d => d.centreId === centre.id);
        centre.events = events.filter(e => e.centreId === centre.id);
        centre.appointments = appointments.filter(a => a.centreId === centre.id);
        if(centre.events.length && centre.staffs.length) {
            centre.events.forEach(ev => {
                ev.selected = false;
                var eventDoctor = centre.staffs.filter(s => s.id === ev.staffId)[0];
                ev.doctorName = eventDoctor.firstName + ' ' + eventDoctor.surname;
            });
        }
        centre.area = centreAreas.find(a => a.id === centre.areaId);
        centre.type = centreTypes.find(t => t.id === centre.typeId);
      }

      function onSelectDoctor(d){
          if(!d){
              setDocId({docId, undefined});
          } else {
          selectedDoctorId = d.id;
          setDocId({docId, selectedDoctorId});
        }
        centre.staffs.forEach(s => {
            if(selectedDoctorId && s.id === selectedDoctorId){
                s.selected = true;
            } else {s.selected = false;}
        })
      }

      function onSelectEvent(e){
        if(!e){
            setEvtId({evtId, undefined});
        } else {
        selectedEventId = e.id;
        setEvtId({evtId, selectedEventId});
        }
        centre.events.forEach(s => {
            if(selectedEventId && s.id === selectedEventId){
                s.selected = true;
            } else {s.selected = false;}
        });
      }

      function onSelectAppointment(e){
        //   console.log(e);
        // if(!e){
        //     setEvtId({evtId, undefined});
        // } else {
        // selectedEventId = e.id;
        // setEvtId({evtId, selectedEventId});
        // }
        // centre.events.forEach(s => {
        //     if(selectedEventId && s.id === selectedEventId){
        //         s.selected = true;
        //     } else {s.selected = false;}
        // });
      }
    return (
      <>
            <h2>{centre.name}</h2>

        {
            setCentreValues(),
            //console.log(selectedDoctorId),
            
        // this.props.loading ? (
        //   <Spinner />
        // ) : 
        (
          <>

            <div className="clinic-appointment-body">
            <div className="appointment-location">
                { centre.location ? <CentreLocation location={centre.location}/> : <div/> }
            </div>
            <div className="row">
                <div className="col-lg-2 appointment-doctors">
                    { centre.staffs.length ? <CentreDoctors doctors={centre.staffs.filter(s => s.isDoctor === true)} onSelectDoctor={onSelectDoctor} selectedDoctorId = {docId.selectedDoctorId} /> : <div/> }
                </div>
                <div className = "col-lg-5">
                    {centre.events.length ? <CentreEvents selectedEvents={docId.selectedDoctorId ? centre.events.filter(e => e.staffId === docId.selectedDoctorId): centre.events} onSelectEvent={onSelectEvent} /> : <div/>}
                </div>
                <div className = "col-lg-5">
                    {centre.appointments.length 
                        ? <CentreAppointments 
                            selectedAppointments={evtId.selectedEventId ? centre.appointments.filter(e => e.eventId === evtId.selectedEventId): centre.appointments} 
                            onSelectAppointment={onSelectAppointment} 
                            selectedEvent = {centre.events.filter(e => e.id === evtId.selectedEventId)[0]}
                            patients = {patients}
                        /> 
                        : <div/>
                    }

                </div>
            </div>
            </div>
          </>
        )}
      </>
    );

}

ManageClinicAppointmentPage.propTypes = {
    centre: PropTypes.object.isRequired,
    docId: PropTypes.number,
    evtId: PropTypes.number,
    selectedDoctorId: PropTypes.number,
    selectedEventId: PropTypes.number,
  locations: PropTypes.array.isRequired,
  staff: PropTypes.array.isRequired,
  doctors: PropTypes.array.isRequired,
  patients: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  centres: PropTypes.array.isRequired,
  appointments: PropTypes.array.isRequired,
  saveCentre: PropTypes.func.isRequired,
  centreTypes: PropTypes.array.isRequired,
  centreAreas: PropTypes.array.isRequired,
  loadCentres: PropTypes.func.isRequired,
  loadLocations: PropTypes.func.isRequired,
  loadStaffs: PropTypes.func.isRequired,
  loadDoctors: PropTypes.func.isRequired,
  loadPatients: PropTypes.func.isRequired,
  loadEvents: PropTypes.func.isRequired,
  loadAppointments: PropTypes.func.isRequired,
  loadCentreTypes: PropTypes.func.isRequired,
  loadCentreAreas: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getCentreById(centres, id){
    return centres.find(centre => centre.id === parseInt(id)) || null;
}

function mapStateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    const centre = id && state.centres.length > 0 ? getCentreById(state.centres, id) : newCentre
    const docId = 0;
  return {
      centre,
      docId,
      selectedDoctorId: state.selectedDoctorId,
    centres: state.centres,
    locations: state.locations,
    staff: state.staff,
    doctors: state.doctors,
    patients: state.patients,
    events: state.events,
    appointments: state.appointments,
    centreTypes: state.centreTypes,
    centreAreas: state.centreAreas
  }
}

const mapDispatchToProps = {
        loadCentres
      , loadLocations
      , loadStaffs
      , loadDoctors
      , loadPatients
      , loadEvents
      , loadAppointments
      , loadCentreTypes
      , loadCentreAreas
      , saveCentre
    }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageClinicAppointmentPage);
