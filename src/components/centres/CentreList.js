import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SelectInput from "../common/SelectInput";

const CentreList = ({ centres, centreTypes, centreAreas, regions, onTypeFiltered, onAreaFiltered, onRegionFiltered
//    , onDeleteClick 
}) => (
  <table className="table">
    <thead>
    <tr>
        <th></th>
        <th>
        <SelectInput
        name="centreTypeId"
        label=""
        //value={typeId || ""}
        defaultOption="All Selected"
        options={centreTypes.map(t => ({
          value: t.id,
          text: t.name
        }))}
        onChange={onTypeFiltered}
        //error={errors.author}
      />

        </th>
        <th>
        <SelectInput
        name="regionId"
        label=""
        defaultOption="All Selected"
        options={regions
          .map(reg=> ({
          value: reg,
          text: reg
        }))}
        onChange={onRegionFiltered}
      /></th><th>
      <SelectInput
        name="centreAreaId"
        label=""
        defaultOption="All Selected"
        options={centreAreas.map(a => ({
          value: a.id,
          text: a.name
        }))}
        onChange={onAreaFiltered}
      />
      </th>
        <th />
      </tr>
      <tr>
        <th>Medical Centre Name</th>
        <th>Category</th>
        <th>Region</th>
        <th>Area</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {centres.map(centre => {
        return (
          <tr key={centre.id}>
            <td>
              <Link to={"/centre/" + centre.id}>{centre.name}</Link>
            </td>
            <td>{centre.centreTypeName}</td>
            <td>{centre.centreRegionName}</td>
            <td>{centre.centreAreaName}</td>
            <td>
              <Link to={"/centreedit/" + centre.id}>Edit</Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CentreList.propTypes = {
  centres: PropTypes.array.isRequired
  ,centreTypes: PropTypes.array.isRequired
  ,centreAreas: PropTypes.array.isRequired
  ,regions: PropTypes.array.isRequired
  ,onTypeFiltered: PropTypes.func.isRequired
  ,onAreaFiltered: PropTypes.func.isRequired
  ,onRegionFiltered: PropTypes.func.isRequired
};

export default CentreList;
