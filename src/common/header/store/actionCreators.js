import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const getList = () => {
  return async dispatch => {
    await axios
      .get("/api/headerList.json")
      .then(res => {
        const response = res.data;
        const action = changeList(response);
        dispatch(action);
      })
      .catch(e => {
        console.log(e);
      });
  };
};
export const MouseEnter = () => {
  return {
    type: constants.MOUSE_ENTER
  };
};
export const MouseLeave = () => {
  return {
    type: constants.MOUSE_LEAVE
  };
};
export const changePage = page => {
  return {
    type: constants.CHANGE_PAGE,
    page: page
  };
};

const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data.data),
  totalPage: Math.ceil(data.data.length / 10)
});
