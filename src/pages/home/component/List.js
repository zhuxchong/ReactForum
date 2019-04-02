import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    return (
      <div>
        {this.props.list.map((i, index) => {
          return (
            <Link key={index} to={"detail/" + i.id}>
              <ListItem>
                <img className="list-pic" src={i.imgUrl} alt="12" />
                <ListInfo>
                  <h3 className="title">{i.title}</h3>
                  <p className="decscription">{i.desc}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}

        <LoadMore
          onClick={() => {
            this.props.getMoreList(this.props.page);
          }}
        >
          More
        </LoadMore>
      </div>
    );
  }
}
const mapState = state => {
  return {
    list: state
      .get("home")
      .get("artcleList")
      .toJS(),
    page: state.get("home").get("artclePage")
  };
};
const mapDispatch = dispatch => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(List);
