import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import NumberGenerator from "./components/NumberGenerator";
import Play from "./components/Play";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="main">
          <h1>Generate Random Number</h1>
          <Switch>
            <Route exact path="/" component={NumberGenerator} />
            <Route path="/play" component={Play} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
