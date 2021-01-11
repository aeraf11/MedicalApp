import React from "react";
import PropTypes from "prop-types";

var minutes = [];
function getMinuteSlots (a, hr, patients) {
    // console.log(patients);
    for(var i=0; i<12; i++){
        var patientId = '';
        var statusId = 0;
        var patientName = '';
        var duration = 0;
        if(a && a.length){
            a.forEach(ap => {
                var timeArray = ap.startTime.split(':');
                if(timeArray && timeArray.length) {
                    var hourSlot = parseInt(timeArray[0]);
                    var minSlot = parseInt(timeArray[1]);
                    if(hr == hourSlot && i*5 ==minSlot) {
                        patientId = ap.patientId;
                        statusId = ap.statusId;
                        duration = ap.duration -5;
                        var patient = patients.filter(p => p.id === patientId)[0];
                        patientName = patient.firstName + ' ' + patient.surname;
                    }
                }
            });
        }
      minutes.push({id:i+1, text: getMinuteText(i), patientId:patientId, statusId: statusId, patientName: patientName, duration: duration});
    }
}

function getMinuteText (id) {
    return (id*5<10 ? '0'+ (id*5).toString():(id*5).toString()) + '-' 
    + ((id+1)*5<10 ? '0'+ ((id+1)*5).toString(): ((id+1)*5).toString())
}

const dayPart = [{id: 1, text: ""} ];

var hours = [];
function getTimeStampList(e, a, patients){
    hours = [];
    if(e){
        //console.log(e);
        var stHr = parseInt(e.startTime.split(':')[0]);
        var enHr = parseInt(e.endTime.split(':')[0]);

        for(var i=stHr; i<enHr; i++){
            minutes = [];
            getMinuteSlots (a, i, patients);
            var hour = { id:i+1, text: 
                (i === 0 ? '12 AM': 
                i < 10 ? '0' + (i).toString() + ' AM': i<12 ? (i).toString() + ' AM' 
                : i<13 ? '12 PM' : i < 22 ? '0' + (i -12).toString() + ' PM' 
                : (i-12).toString() + ' PM' 
                )};
            hour.minutes = minutes;
            hours.push(hour);      
          }
          dayPart.forEach(dp => {
            dp.hours = hours;
          });
    }
}
function getStatusClass (sid) {
    switch(sid) {
        case 1:
          return 'ap-booking-applied btn-appointment';
        case 2:
            return 'ap-manager-review btn-appointment';
        case 3:
            return 'ap-approved btn-appointment';
        case 4:
            return 'ap-canceled btn-appointment';
        case 5:
            return 'ap-patient-arrived btn-appointment';
        case 6:
            return 'ap-with-doctor btn-appointment';
        case 7:
            return 'ap-finished btn-appointment';
        default:
            return 'ap-empty btn-appointment';
      }
}

const CentreAppointments = ({ selectedAppointments, onSelectAppointment, selectedEvent, patients }) => (

    <div>
        {
            getTimeStampList(selectedEvent, selectedAppointments, patients)
        }
        <div className="table-heading">Appointments
        {selectedEvent? ' for Doctor: ' + selectedEvent.doctorName + ' - Room #:'+ selectedEvent.roomNo + " "
        :""}
        </div>
        <div className="table-median-line"></div>
        <div className="table-body">
    {
      dayPart ? dayPart.map(dp => (
          
        <div className="main-container"  key={dp.id}>
          {dp.hours ? dp.hours.map(h => (
            <div className="main-container"  key={h.id}>
                <div className="left-container"><b>{h.text}</b></div>
                <div className='out'>
                
                <div className='in'>
                { h.minutes.map(m => (
                    <div key={m.id}>
                        <div className=' right-container'>
                            <button className={getStatusClass(m.statusId)} title={'(' +  m.text + '+'+m.duration + ')' + m.patientName}>
                                <span className="timeSpan">{m.text}</span>
                                <span className={getStatusClass(m.statusId)}>{m.patientId === '' ? '' : m.patientName.substring(0,15)}</span>
                            </button>
                        </div>              
                    </div>
                ))}
                </div>
                </div>
            </div>
          ))
          : ''
          }
        </div>
      ))
      : ''
    }
    </div>
  </div>
  );

  CentreAppointments.propTypes = {
    selectedAppointments: PropTypes.array.isRequired
    , patients: PropTypes.array.isRequired
    , onSelectAppointment: PropTypes.func.isRequired
    , selectedEvent: PropTypes.object
};
  
export default CentreAppointments;