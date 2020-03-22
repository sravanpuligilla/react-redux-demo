import React, { Component } from "react";
import { connect } from "react-redux";
import { actions as serviceDetialsActions } from "../reducers/serviceDetails";

export class ControlService extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    await this.props.getControlService();

	console.log(this.props.serviceDetailsData);
  }

  render() {
	
	return (
	<ul>
        {/* {this.props.data.map((el,i) => (
          <li key={i}>{el.id}</li>
        ))} */}
       {/* {this.props.serviceDetailsData.serviceDetailsData} */}
       
      </ul>
    );
	
    
  }// return for render
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