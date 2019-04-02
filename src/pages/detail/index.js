import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreators } from "./store";
import { DetailWrapper, Header, Content } from "./style";
class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHeaderShow(true);
    this.props.getDetail(this.props.match.params.id);
  }
}
const mapState = state => {
  return {
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
  };
};
const mapDispatch = dispatch => {
  return {
    changeHeaderShow(boolean) {
      const action = actionCreators.changeHeaderShow(boolean);
      dispatch(action);
    },
    getDetail(id) {
      dispatch(actionCreators.getDetail(id));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(withRouter(Detail));
