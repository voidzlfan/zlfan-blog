import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "./pages/index";
import Login from "./pages/login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Index}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
