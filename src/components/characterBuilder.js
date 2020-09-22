import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/builder.css";

function mapStateToProps(state) {
  return { originPath: state.builder };
}

class characterBuilder extends Component {
  state = {
    name: "",
    homeworldValue: null,
    birthRightValue: null,
    lureValue: null,
    trailsValue: null,
    motivationValue: null,
    careerValue: null,
    HomeworldPick: "",
    BirthrightPick: "",
    LurePick: "",
    TrailsPick: "",
    MotivationPick: "",
    CareerPick: "",
  };

  render() {
    return <p>yeet</p>;
  }
}
export default connect(mapStateToProps)(characterBuilder);
