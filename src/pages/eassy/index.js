import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Essay extends Component {
  render() {
    if (this.props.loginStatus) {
      return <div>Can Write Eassy</div>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}
const mapState = state => {
  return {
    loginStatus: state.getIn(["login", "login"])
  };
};
const mapDispatch = dispatch => {
  return {};
};

export default connect(
  mapState,
  mapDispatch
)(Essay);
