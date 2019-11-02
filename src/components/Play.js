import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";

class Play extends Component {
  state = {
    num: "",
    diff: ""
  };

  compare() {
    // Compare the two strings
    const { num } = this.state;
    let arr = num.split(""),
      str = window.localStorage.getItem("randomNumber"),
      cnt = 0;
    for (let s of str) {
      let index = arr.findIndex(i => i === s);
      if (index >= 0) {
        cnt++;
        arr.splice(index, 1);
      }
    }
    return cnt;
  }

  onChange = e => {
    let { value } = e.target;
    console.log();
    if (value.length <= 6 && /^\d*$/.test(value))
      // checks if the string is numeric and not more than 6 digits
      this.setState({
        [e.target.name]: e.target.value
      });
  };

  onSubmit = e => {
    e.preventDefault();
    const { num } = this.state;
    if (num) {
      const N = this.compare();
      this.setState({
        diff: `${N} characters match`
      });
    } else {
      alert("Don't leave the field Empty");
      this.setState({ diff: "" });
    }
  };

  // errorFinder(N) {
  //   if(N.length > 6){
  //     alert('Please enter a 6 digit number');
  //   } else {

  //   }
  // }

  helperFunction() {
    const { num, diff } = this.state;
    return (
      <div className="play">
        <form onSubmit={this.onSubmit}>
          <input
            className="Inp"
            type="text"
            name="num"
            value={num}
            placeholder="Enter Number"
            onChange={this.onChange}
            // required
          />
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
        <div>{diff}</div>
        <button className="submit" onClick={this.goBack}>
          Play Again
        </button>
      </div>
    );
  }

  goBack = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    return window.localStorage.getItem("randomNumber") ? (
      this.helperFunction()
    ) : (
      <Redirect to="/" />
    );
  }
}

export default withRouter(Play);
