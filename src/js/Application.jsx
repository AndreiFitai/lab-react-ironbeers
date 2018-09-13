import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Home from "./Home";
import ListBeers from "./ListBeers";

class Application extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/listbeers" component={ListBeers} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Application;
