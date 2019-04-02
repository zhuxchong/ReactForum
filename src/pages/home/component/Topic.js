import React, { PureComponent } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";
class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {this.props.list.map(i => {
          return (
            <TopicItem key={i.id}>
              <img className="topic-pic" src={i.imgUrl} alt="hello" />
              {i.title}
            </TopicItem>
          );
        })}
        <TopicItem>
          <img
            className="topic-pic"
            src="http://pics.sc.chinaz.com/Files/pic/icons128/4417/broom.png"
            alt="hello"
          />
          Hot Topic
        </TopicItem>
      </TopicWrapper>
    );
  }
}
const mapState = state => {
  return {
    list: state
      .get("home")
      .get("topicList")
      .toJS()
  };
};

export default connect(
  mapState,
  null
)(Topic);
