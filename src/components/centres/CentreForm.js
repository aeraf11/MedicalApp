import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CentreForm = ({
  centre,
  locations,
  centreTypes,
  centreAreas,
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
        name="name"
        label="Centre Name"
        value={centre.name}
        onChange={onChange}
        error={errors.name}
      />

      <SelectInput
        name="typeId"
        label="Type"
        value={centre.typeId || ""}
        defaultOption="Select Type"
        options={centreTypes.map(t => ({
          value: t.id,
          text: t.name
        }))}
        onChange={onChange}
        error={errors.t}
      />

      <SelectInput
        name="areaId"
        label="Area"
        value={centre.areaId || ""}
        defaultOption="Select Area"
        options={centreAreas.map(a => ({
          value: a.id,
          text: a.name
        }))}
        onChange={onChange}
        error={errors.a}
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

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

CentreForm.propTypes = {
  locations: PropTypes.array.isRequired,
  centreTypes: PropTypes.array.isRequired,
  centreAreas: PropTypes.array.isRequired,
  centre: PropTypes.object.isRequired,
  errors: PropTypes.object
  ,onSave: PropTypes.func.isRequired
  ,onChange: PropTypes.func.isRequired
  ,saving: PropTypes.bool
};

export default CentreForm;
