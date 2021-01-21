import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import { Link } from "react-router-dom";
import SelectInput from "../common/SelectInput";

const LocationForm = ({
  location,
  centre,
  centreAreas,
  regions,
  onChange,
  onSave,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{location.id ? "Edit" : "Add"} Location</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="address"
        label="Address"
        value={location.address}
        onChange={onChange}
        error={errors.address}
      />

      <SelectInput
        name="region"
        label="Region"
        value={location.region || ""}
        defaultOption="Select Region"
        options={regions.map(a => ({
          value: a,
          text: a
        }))}
        onChange={onChange}
        error={errors.a}
      />

      <SelectInput
        name="areaId"
        label="Area"
        value={location.areaId || ""}
        defaultOption="Select Area"
        options={centreAreas.map(a => ({
          value: a.id,
          text: a.name
        }))}
        onChange={onChange}
        error={errors.a}
      />


      <TextInput
        name="city"
        label="City"
        value={location.city}
        onChange={onChange}
        error={errors.city}
      />

      <TextInput
        name="state"
        label="State"
        value={location.state}
        onChange={onChange}
        error={errors.state}
      />

      <TextInput
        name="postcode"
        label="postcode"
        value={location.postcode}
        onChange={onChange}
        error={errors.postcode}
      />

      <TextInput
        name="country"
        label="Country"
        value={location.country}
        onChange={onChange}
        error={errors.country}
      />

      <TextInput
        name="phone"
        label="Phone"
        value={location.phone}
        onChange={onChange}
        error={errors.phone}
      />
      

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
      <div>{location.id ? 
      <Link className="btn btn-danger" to={"/centreedit/" + centre.id}>Cancel</Link>
    : <Link className="btn btn-danger" to={"/centreedit"}>Cancel</Link>
    }
      </div>
    </form>
  );
};

LocationForm.propTypes = {
   location: PropTypes.object.isRequired
   ,centre: PropTypes.object.isRequired
   ,regions: PropTypes.array.isRequired
  ,centreAreas: PropTypes.array.isRequired
  ,errors: PropTypes.object
  ,onSave: PropTypes.func.isRequired
  ,onChange: PropTypes.func.isRequired
  ,saving: PropTypes.bool
};

export default LocationForm;
