import * as constants from "./constants";

import { fromJS } from "immutable";

const defaultState = fromJS({
  title: "",
  content: "",

  doShow: true
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.HEADER_SHOW:
      return state.set("doShow", action.doShow);
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      });
    default:
      return state;
  }
};
