import React, { Component } from "react";
import { connect } from "react-redux";
import { getOriginTier, clearStore } from "../Store/Builder/actions";

function mapStateToProps(state) {
  return { builder: state.builder };
}

class characterBuilder extends Component {
  state = {
    name: "",
    homeworldPick: null,
    birthRightPick: null,
    lurePick: null,
    trailsPick: null,
    motivationPick: null,
    careerPick: null
  };

  componentDidMount() {
    this.props.dispatch(getOriginTier("Homeworld"));
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  pickChangeHandler = (tier, value) => {
    value = parseInt(value);
    const tiers = [
      "Homeworld",
      "Birthright",
      "Lure",
      "Trails",
      "Motivation",
      "Career",
      "done"
    ];

    const getTier = tiers[tiers.findIndex(entry => entry === tier) + 1];

    if (getTier === "Birthright") {
      this.setState({
        homeworldPick: value,
        birthRightPick: null,
        lurePick: null,
        trailsPick: null,
        motivationPick: null,
        careerPick: null
      });
      this.props.dispatch(
        clearStore([
          "Birthright",
          "Lure",
          "Trails",
          "Motivation",
          "Career",
          "done"
        ])
      );
    }

    if (getTier === "Lure") {
      this.setState({
        birthRightPick: value - 1,
        lurePick: null,
        trailsPick: null,
        motivationPick: null,
        careerPick: null
      });
      this.props.dispatch(
        clearStore(["Lure", "Trails", "Motivation", "Career", "done"])
      );
      value = this.state.homeworldPick + value - 1;
    }

    if (getTier === "Trails") {
      this.setState({
        lurePick: value - 1,
        trailsPick: null,
        motivationPick: null,
        careerPick: null
      });
      this.props.dispatch(
        clearStore(["Trails", "Motivation", "Career", "done"])
      );
      value = this.state.homeworldPick + this.state.birthRightPick + value - 1;
    }

    if (getTier === "Motivation") {
      this.setState({
        trailsPick: value - 1,
        motivationPick: null,
        careerPick: null
      });
      this.props.dispatch(clearStore(["Motivation", "Career", "done"]));
      value =
        this.state.homeworldPick +
        this.state.birthRightPick +
        this.state.lurePick +
        value -
        1;
    }

    if (getTier === "Career") {
      this.setState({ motivationPick: value - 1, careerPick: null });
      this.props.dispatch(clearStore(["Career"]));
      value =
        this.state.homeworldPick +
        this.state.birthRightPick +
        this.state.lurePick +
        this.state.trailsPick +
        value;
    }

    if (getTier === "done") {
    }
    this.props.dispatch(getOriginTier(getTier, value));
  };

  createDropdown = (choiceArray, tier) => {
    return (
      <select
        onChange={event => this.pickChangeHandler(tier, event.target.value)}>
        <option key='default' value={null}>
          Make a choice{" "}
        </option>
        {choiceArray.map((pick, idx) => {
          if (!pick) {
            return null;
          }
          return (
            <option key={idx} value={idx}>
              {pick}
            </option>
          );
        })}
      </select>
    );
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
          {this.props.builder.tiers.Homeworld
            ? this.createDropdown(
                this.props.builder.tiers.Homeworld,
                "Homeworld"
              )
            : ""}
          {this.props.builder.tiers.Birthright
            ? this.createDropdown(
                this.props.builder.tiers.Birthright,
                "Birthright"
              )
            : ""}{" "}
          {this.props.builder.tiers.Lure
            ? this.createDropdown(this.props.builder.tiers.Lure, "Lure")
            : ""}{" "}
          {this.props.builder.tiers.Trails
            ? this.createDropdown(this.props.builder.tiers.Trails, "Trails")
            : ""}{" "}
          {this.props.builder.tiers.Motivation
            ? this.createDropdown(
                this.props.builder.tiers.Motivation,
                "Motivation"
              )
            : ""}{" "}
          {this.props.builder.tiers.Career
            ? this.createDropdown(this.props.builder.tiers.Career, "Career")
            : ""}
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(characterBuilder);
