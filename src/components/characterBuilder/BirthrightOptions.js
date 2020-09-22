import React, { Component } from "react";

class BirthrightOptions extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.changeSubpage(5)}>click</button>
      </div>
    );
  }
}

export default BirthrightOptions;
