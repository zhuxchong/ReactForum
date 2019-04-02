import React, { PureComponent } from "react";
import { RecommandWrapper, RecommandItem } from "../style";
import { connect } from "react-redux";
class Recommand extends PureComponent {
  render() {
    return (
      <div>
        {this.props.list.map(i => {
          return (
            <RecommandWrapper key={i.id}>
              <RecommandItem imgUrl={i.imgUrl} />
            </RecommandWrapper>
          );
        })}
      </div>
    );
  }
}
const mapState = state => {
  return {
    list: state
      .get("home")
      .get("recommandItem")
      .toJS()
  };
};

export default connect(
  mapState,
  null
)(Recommand);
