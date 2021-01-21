import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import { Link } from "react-router-dom";

const CentreForm = ({
  centre,
  locations,
  regions,
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
        name="region"
        label="Region"
        value={centre.region || ""}
        defaultOption="Select Region"
        options={regions.map(r => ({
          value: r,
          text: r
        }))}
        onChange={onChange}
        error={errors.r}
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
          text:loc.address + ', ' + loc.areaName + '-' + loc.region  + ', ' + loc.city
        }))}
        onChange={onChange}
        error={errors.loc}
      />
      <div>{centre.locationId ? 
      <Link to={"/location/" + centre.locationId}>Edit Location</Link>
    : <Link to={"/location"}>Add Location</Link>
    }
      </div>
      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
      <Link className="btn btn-danger" to={"/centres"}>Cancel</Link>
    </form>
  );
};

CentreForm.propTypes = {
  locations: PropTypes.array.isRequired,
  regions: PropTypes.array.isRequired,
  centreTypes: PropTypes.array.isRequired,
  centreAreas: PropTypes.array.isRequired,
  centre: PropTypes.object.isRequired,
  errors: PropTypes.object
  ,onSave: PropTypes.func.isRequired
  ,onChange: PropTypes.func.isRequired
  ,saving: PropTypes.bool
};

export default CentreForm;
