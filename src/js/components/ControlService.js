import React, { Component } from "react";
import { connect } from "react-redux";
import { actions as serviceDetialsActions } from "../reducers/serviceDetails";

export class ControlService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceData: []
    };
  }

  componentDidMount = async () => {
    await this.props.getControlService();
    this.setState(
      {
        serviceData: this.props.serviceDetailsData.serviceDetailsData
      });	  
  }

  render() {
    return (
      <React.Fragment>
      <ul>
        {this.state.serviceData.map((el,i) => (
            <li key={i}>{el.id}</li>
          ))}        
        </ul>
      </React.Fragment>
    )
  }

}

function mapStateToProps(state) {
  return {
    serviceDetailsData: state.serviceDetails.serviceDetailsList
  };
}

const mapDispatchToProps = {
  ...serviceDetialsActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlService);