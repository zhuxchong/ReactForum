import * as constants from "./constants";

import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  artcleList: [],
  recommandItem: [],
  artclePage: 1,
  showScroll: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        artcleList: fromJS(action.artcleList),
        recommandItem: fromJS(action.recommandItem)
      });

    case constants.ADD_HOME:
      return state.merge({
        artcleList: state.get("artcleList").concat(fromJS(action.artcleList)),
        artclePage: action.nPage
      });
    case constants.TOP_SHOW:
      return state.merge({
        showScroll: action.showScroll
      });
    default:
      return state;
  }
};
