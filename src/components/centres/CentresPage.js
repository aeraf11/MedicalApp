import React from "react";
import { connect } from "react-redux";
import * as centresActions from "../../redux/actions/centreAction";
import * as centreTypeActions from "../../redux/actions/centreTypeAction";
import * as centreAreaActions from "../../redux/actions/centreAreaAction";
import * as locationActions from "../../redux/actions/locationAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CentreList from "./CentreList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
//import { toast } from "react-toastify";

class CentresPage extends React.Component {
  state = {
    redirectToAddCentresPage: false,
    typeId:"",
    areaId:"",
    regionId:""
  };

  componentDidMount() {
    const { centres, centreTypes, centreAreas, locations, actions } = this.props;

    if (centres.length === 0) {
      actions.loadCentres().catch(error => {
        alert("Loading centres failed" + error);
      });
    }

    if (centreTypes.length === 0) {
      actions.loadCentreTypes().catch(error => {
        alert("Loading types failed" + error);
      });
    }

    if (centreAreas.length === 0) {
        actions.loadCentreAreas().catch(error => {
          alert("Loading areas failed" + error);
        });
      }

      if (locations.length === 0) {
        actions.loadLocations().catch(error => {
          alert("Loading authors failed" + error);
        });
      }
      }

      filterByType = (t) => {
        this.setState({typeId: t.target.value});
      }
      filterByArea = (a) => {
        this.setState({areaId: a.target.value});
      }
      filterByRegion = (r) => {
        this.setState({regionId: r.target.value});
      }
      getCentres = (centres) => {
        var filteredCentres = centres;
        if(this.state.typeId !== ""){
          filteredCentres = centres.filter(c => c.typeId == parseInt(this.state.typeId))
        }
        if(this.state.areaId !== ""){
          filteredCentres = filteredCentres.filter(c => c.areaId == parseInt(this.state.areaId))
        }
        if(this.state.regionId !== ""){
          filteredCentres = filteredCentres.filter(c => c.centreRegionName == this.state.regionId)
        }
        return filteredCentres;
      }
  render() {
    return (
      <>
        {this.state.redirectToAddCentresPage && <Redirect to="/centreedit" />}
        <h2>Medical Centres</h2>
        <button
            style={{marginBottom: 20}}
            className="btn btn-primary add-centre"
            onClick={() => this.setState({ redirectToAddCentresPage: true})}
        >Add Centre</button>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <CentreList
                onTypeFiltered={this.filterByType}
                onAreaFiltered={this.filterByArea}
                onRegionFiltered={this.filterByRegion}
                centres={ this.getCentres(this.props.centres) }
                        
                centreTypes={this.props.centreTypes}
                centreAreas={this.state.regionId === "" ? this.props.centreAreas 
                : this.props.centreAreas.filter(a => a.region == this.state.regionId)}
                regions={[...new Set(this.props.centreAreas.map(r => r.region))]}
            />
          </>
        )}
      </>
    );
  }
}

CentresPage.propTypes = {
  locations: PropTypes.array.isRequired,
  centres: PropTypes.array.isRequired,
  centreTypes: PropTypes.array.isRequired,
  centreAreas: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  , loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
      typeId: state.typeId,
    centres:
      state.centres.length === 0
        ? []
        : state.centres.map(centre => {
            return {
              ...centre
              , centreTypeName: state.centreTypes.find(a => a.id === centre.typeId)?state.centreTypes.find(a => a.id === centre.typeId).name : ""
              , centreAreaName: state.centreAreas.find(a => a.id === centre.areaId)?state.centreAreas.find(a => a.id === centre.areaId).name : ""
              , centreRegionName: state.centreAreas.find(a => a.id === centre.areaId)?state.centreAreas.find(a => a.id === centre.areaId).region : ""
            };
          }),
    locations: state.locations,
    centreTypes: state.centreTypes,
    centreAreas: state.centreAreas
    , loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
        loadCentres: bindActionCreators(centresActions.loadCentres, dispatch)
      , loadLocations: bindActionCreators(locationActions.loadLocations, dispatch)
      , loadCentreTypes: bindActionCreators(centreTypeActions.loadCentreTypes, dispatch)
      , loadCentreAreas: bindActionCreators(centreAreaActions.loadCentreAreas, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CentresPage);
