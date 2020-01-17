import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class homePage extends Component {
  render() {
    return (
      <div>
        <Redirect to={`build`} />
      </div>
    );
  }
}

export default homePage;
