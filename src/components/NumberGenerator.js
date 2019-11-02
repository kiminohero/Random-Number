import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class NumberGenerator extends Component {
  state = {
    Num: "",
    RanNum: false
  };

  componentDidMount() {
    window.localStorage.clear();
  }

  onClick = () => {
    let num = 100000 + Math.floor(Math.random() * 900000);
    this.setState({
      Num: `${num}`,
      RanNum: true
    });
    window.localStorage.setItem("randomNumber", `${num}`);
    this.helpRedirect();
  };

  helpRedirect = () => {
    const { history } = this.props;
    setTimeout(() => {
      history.push("/play");
    }, 5000);
  };

  render() {
    return (
      <div>
        <div>{this.state.Num}</div>
        <button onClick={this.onClick} className="Gen">
          Generate a number
        </button>
        <div>
          <span>{this.state.RanNum ? "Refreshing in 5 seconds" : ""}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(NumberGenerator);
