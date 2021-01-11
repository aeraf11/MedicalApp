import React from "react";
import PropTypes from "prop-types";

const CentreDoctors = ({ doctors, onSelectDoctor, selectedDoctorId }) => (
    <table className="table">
      <thead>
        <tr>
          <th>Doctors</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>
            <button
                    className={selectedDoctorId ? "btn btn-outline-danger select-doctor" : "btn btn-danger select-doctor"}
                    onClick={() => onSelectDoctor(0)}
                    >
                    {'All Doctors'}
                    </button>                  
            </td>
        </tr>

        {doctors.map(d => {
          return (
            <tr key={d.id}>
                <td>
                    <button
                    className={selectedDoctorId && d.selected ? "btn btn-danger select-doctor": "btn btn-outline-danger select-doctor"}
                    onClick={() => {d.selected = true; onSelectDoctor(d);}}
                    >
                    {d.firstName + ' ' + d.surname + ' - ' + d.designation}
                    </button>                    
                </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

CentreDoctors.propTypes = {
      doctors: PropTypes.array.isRequired
    , onSelectDoctor: PropTypes.func.isRequired
    , selectedDoctorId: PropTypes.number
};
  
export default CentreDoctors;