import React from "react";
import PropTypes from "prop-types";

const CentreEvents = ({ selectedEvents, onSelectEvent }) => (
    <table className="table">
      <thead>
        <tr>
          <th>Events</th>
        </tr>
      </thead>
      <tbody>
        {selectedEvents.map(e => {
          return (
            <tr key={e.id}>
                <td>
                    <button
                    className={e.selected ? "btn btn-outline-danger select-doctor": "btn btn-danger select-doctor"}
                    onClick={() => { onSelectEvent(e)}}
                    >
                    {e.doctorName + '-' + 'Room No. ' + e.roomNo +' - Date: ' +  e.date + '- Timings: ' + e.startTime + ' To ' + e.endTime}
                    </button>                    
                </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  CentreEvents.propTypes = {
    selectedEvents: PropTypes.array.isRequired
    , onSelectEvent: PropTypes.func.isRequired
};
  
export default CentreEvents;