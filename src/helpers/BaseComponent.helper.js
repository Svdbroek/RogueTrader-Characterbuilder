import React, { Component } from "react";
import { Redirect } from "react-router";

class BaseComponent extends Component {
  redirectHelper() {
    if (this.props.redirect) {
      return <Redirect to={this.props.redirect} />;
    }
  }

  render() {
    return this.redirectHelper() || this.html();
  }
}

export default BaseComponent;
