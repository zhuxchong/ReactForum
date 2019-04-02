import * as constants from "./constants";
import axios from "axios";

export const changeHeaderShow = boolean => {
  return {
    type: constants.HEADER_SHOW,
    doShow: boolean
  };
};
export const getDetail = id => {
  return async dispatch => {
    await axios.get("/api/detail.json?id=" + id).then(res => {
      const data = res.data.data;
      const action = changDetail(data);
      dispatch(action);
    });
  };
};
const changDetail = data => {
  return {
    type: constants.CHANGE_DETAIL,
    title: data.title,
    content: data.content
  };
};
