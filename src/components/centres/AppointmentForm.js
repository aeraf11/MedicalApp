import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const AppointmentForm = ({
  centre,
  locations,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{centre.id ? "Edit" : "Add"} Centre</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={centre.name}
        onChange={onChange}
        error={errors.name}
      />

      <SelectInput
        name="locationId"
        label="Location"
        value={centre.locationId || ""}
        defaultOption="Select Location"
        options={locations.map(loc => ({
          value: loc.id,
          text: loc.address + ', ' + loc.town + ', ' + loc.city
        }))}
        onChange={onChange}
        error={errors.loc}
      />
{/* 
      <TextInput
        name="category"
        label="Category"
        value={centre.category}
        onChange={onChange}
        error={errors.category}
      /> */}

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

AppointmentForm.propTypes = {
  locations: PropTypes.array.isRequired,
  centre: PropTypes.object.isRequired,
  errors: PropTypes.object
  ,onSave: PropTypes.func.isRequired
  ,onChange: PropTypes.func.isRequired
  ,saving: PropTypes.bool
};

export default AppointmentForm;
