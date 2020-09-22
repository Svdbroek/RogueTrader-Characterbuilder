import React, { Component } from "react";
import { Link } from "react-router-dom";

class homePage extends Component {
  render() {
    return (
      <div>
        <Link to="build">
          <button>Create a new Character</button>
        </Link>
      </div>
    );
  }
}

export default homePage;
