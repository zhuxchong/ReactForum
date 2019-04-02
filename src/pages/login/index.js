import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginWrapper, LoginBox, Input, Buttom } from "./style";
import { actionCreators } from "./store";

class Login extends Component {
  render() {
    if (!this.props.loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="username"
              ref={input => {
                this.account = input;
              }}
            />
            <Input
              placeholder="password"
              type="password"
              ref={input => {
                this.password = input;
              }}
            />
            <Buttom
              onClick={() => {
                this.props.login(this.account.value, this.password.value);
              }}
            >
              login
            </Buttom>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
const mapState = state => {
  return {
    loginStatus: state.getIn(["login", "login"])
  };
};
const mapDispatch = dispatch => {
  return {
    login(account, password) {
      dispatch(actionCreators.login(account, password));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Login);
