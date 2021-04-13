import React from "react";
import { connect } from "react-redux";
import BaseComponent from "../helpers/BaseComponent.helper";
import propsEnhancer from "../helpers/propsEnhancer.helper";
import { newCharacter } from "../Store/CharacterBuilder/charatcterBuilder.actions";

function mapStateToProps(state) {
  return propsEnhancer({});
}

class HomePage extends BaseComponent {
  html() {
    return (
      <div>
        <button onClick={() => this.createNewCharacter()}>
          Create a new Character
        </button>
      </div>
    );
  }
  createNewCharacter = () => {
    this.props.dispatch(newCharacter());
  };
}

export default connect(mapStateToProps)(HomePage);
