import axios from "axios";
import * as constants from "./constants";
export const getHomeInfo = () => {
  return dispatch => {
    axios
      .get("./api/home.json")
      .then(res => {
        const result = res.data.data;
        dispatch(changeHomeData(result));
      })
      .catch(e => {
        console.log(e);
      });
  };
};
const changeHomeData = result => {
  return {
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    artcleList: result.artcleList,
    recommandItem: result.recommandItem
  };
};
export const getMoreList = page => {
  return dispatch => {
    axios
      .get("./api/moreList.json?page=" + page)
      .then(res => {
        const result = res.data.data;
        dispatch(addHomeData(result, page + 1));
      })
      .catch(e => {
        console.log(e);
      });
  };
};
const addHomeData = (result, nPage) => {
  return {
    type: constants.ADD_HOME,
    artcleList: result.artcleList,
    nPage: nPage
  };
};
export const toggleTopShow = boolean => {
  return dispatch => {
    const action = {
      type: constants.TOP_SHOW,
      showScroll: boolean
    };
    dispatch(action);
  };
};
export const changeHeaderShow = boolean => {
  return {
    type: constants.HEADER_SHOW,
    doShow: boolean
  };
};
