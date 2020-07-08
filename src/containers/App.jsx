import React, { Component } from "react";
import { connect } from "react-redux";
import { test } from "./action";

class App extends Component {
  render() {
    return <p className="heading">Colleges in North India</p>;
  }
}

export default connect(null, {
  test
})(App);
