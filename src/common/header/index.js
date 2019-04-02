import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from "./style";
import { actionCreators as loginactionCreators } from "../../pages/login/store";

class Header extends Component {
  render() {
    if (this.props.doShow) {
      return (
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">Home</NavItem>
            <NavItem className="left">Get app</NavItem>
            <SearchWrapper>
              <CSSTransition
                timeout={200}
                in={this.props.focus}
                classNames="slide"
              >
                <NavSearch
                  className={this.props.focus ? "focused" : ""}
                  onFocus={() => {
                    this.props.handleInputFocus(this.props.list);
                  }}
                  onBlur={this.props.handleInputBlur}
                />
              </CSSTransition>
              <span
                className={
                  this.props.focus ? "focused iconfont zoom" : "iconfont"
                }
              >
                &#xe62d;
              </span>
              {this.getListArea()}
            </SearchWrapper>
            {this.props.login ? (
              <NavItem className="right" onClick={this.props.logout}>
                logout
              </NavItem>
            ) : (
              <Link to="/login">
                <NavItem className="right">login</NavItem>
              </Link>
            )}

            <NavItem className="right">Aa</NavItem>
            <Addtion>
              <Link to="/essay">
                <Button className="writting">
                  <span className="iconfont">&#xe61b;</span>
                  Write Essay
                </Button>
              </Link>
              <Button className="reg">Register</Button>
            </Addtion>
          </Nav>
        </HeaderWrapper>
      );
    } else {
      return <div>no header</div>;
    }
  }
  getListArea = () => {
    const pageList = [];
    const newList = this.props.list.toJS();
    if (newList.length) {
      for (let i = (this.props.page - 1) * 10; i < this.props.page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (this.props.focus || this.props.mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.handleMouseLeave}
        >
          <SearchInfoTitle>
            热门
            <SearchInfoSwitch
              onClick={() => {
                this.props.handChagePage(this.props.page, this.props.totalPage);
              }}
            >
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>{pageList}</div>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };
}

const mapStateToProps = state => {
  return {
    focus: state.getIn(["header", "focus"]),
    list: state.getIn(["header", "list"]),
    totalPage: state.getIn(["header", "totalPage"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    doShow: state.getIn(["detail", "doShow"]),
    login: state.getIn(["login", "login"])

    //state.get("header").get("focus")
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      list._capacity === 0 && dispatch(actionCreators.getList());
      const action = actionCreators.searchFocus();
      dispatch(action);
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur();
      dispatch(action);
    },
    handleMouseEnter() {
      dispatch(actionCreators.MouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.MouseLeave());
    },
    handChagePage(page, totalPage) {
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginactionCreators.logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
