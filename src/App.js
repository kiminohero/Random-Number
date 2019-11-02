import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import NumberGenerator from "./components/NumberGenerator";
import Play from "./components/Play";

class App extends Component {
  render() {
    return (
      <Router>
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
