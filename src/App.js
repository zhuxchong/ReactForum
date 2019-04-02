import React, { Component, Fragment } from "react";
import Header from "./common/header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import { GloalStyle } from "./style";
import store from "./store";
import { Provider } from "react-redux";
import Login from "./pages/login";
import Essay from "./pages/eassy";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <GloalStyle />

          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/detail/:id" exact component={Detail} />

              <Route path="/essay" exact component={Essay} />
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}
export default App;
