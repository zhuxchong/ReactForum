import axios from "axios";
import * as constants from "./constants";
export const login = (a, p) => {
  return dispatch => {
    axios.get("/api/login.json?account" + a + "&password=" + p).then(res => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin());
      } else {
        console.log("error");
      }
    });
  };
};
const changeLogin = () => {
  return {
    type: constants.CHANGE_LOGIN,
    login: true
  };
};

export const logout = () => {
  return {
    type: constants.CHANGE_LOGIN,
    login: false
  };
};
