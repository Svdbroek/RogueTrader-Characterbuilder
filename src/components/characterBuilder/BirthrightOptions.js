import React from "react";
import BaseComponent from "../../helpers/BaseComponent.helper";

class BirthrightOptions extends BaseComponent {
  render() {
    return (
      <div>
        <button onClick={() => this.props.changeSubpage(5)}>click</button>
      </div>
    );
  }
}

export default BirthrightOptions;
