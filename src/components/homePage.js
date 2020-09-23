import React from "react";
import { connect } from "react-redux";
import BaseComponent from "../helpers/BaseComponent.helper";
import propsEnhancer from "../helpers/propsEnhancer.helper";
import { redirect } from "../Store/app/app.acs";

function mapStateToProps(state) {
  return propsEnhancer({});
}

class HomePage extends BaseComponent {
  html() {
    return (
      <div>
        <button onClick={() => this.testFunction()}>
          Create a new Character
        </button>
      </div>
    );
  }
  testFunction = () => {
    this.props.dispatch(redirect("/build"));
  };
}

export default connect(mapStateToProps)(HomePage);
