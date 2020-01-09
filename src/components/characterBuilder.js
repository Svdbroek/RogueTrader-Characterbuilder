import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class characterBuilder extends Component {
  state = { name: "" };

  componentDidMount() {
    this.props.dispatch;
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          Name{" "}
          <input
            type='name'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(characterBuilder);
