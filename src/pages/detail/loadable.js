import Loadable from "react-loadable";
import React from "react";
const LoadableComponent = Loadable({
  loader: () => import("./index.js"),
  loading() {
    return <div>loading...</div>;
  }
});
export default () => {
  return <LoadableComponent />;
};
