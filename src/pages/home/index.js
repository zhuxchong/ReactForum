import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from "./component/Topic";
import List from "./component/List";
import Recommand from "./component/Recommand";
import Writer from "./component/Writer";
import { actionCreators } from "./store";
//import Carousel from "react-bootstrap/Carousel";

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          {
            <img
              className="banner-img"
              src="http://img.soogif.com/fDWToDQy3h2dkisFZD4fFXOq61ZRKMf9.gif"
              alt="sb"
            />
          }
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommand />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>Top</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvent();
    this.props.changeHeaderShow(true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  bindEvent = () => {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  };
  handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
}
const mapState = state => {
  return {
    showScroll: state.get("home").get("showScroll")
  };
};
const mapDispatch = dispatch => {
  return {
    changeHeaderShow(boolean) {
      const action = actionCreators.changeHeaderShow(boolean);
      dispatch(action);
    },
    changeHomeData() {
      const action = actionCreators.getHomeInfo();
      dispatch(action);
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.toggleTopShow(true));
      } else {
        dispatch(actionCreators.toggleTopShow(false));
      }
    }
  };
};
export default connect(
  mapState,
  mapDispatch
)(Home);
