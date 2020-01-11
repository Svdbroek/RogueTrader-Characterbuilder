import React, { Component } from "react";
import { connect } from "react-redux";
import { getOriginTier, clearStore } from "../Store/Builder/actions";
import "../css/builder.css";
import Subsection from "./Subsection";

function mapStateToProps(state) {
  return { builder: state.builder };
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
    CareerPick: ""
  };

  componentDidMount() {
    this.props.dispatch(getOriginTier("Homeworld"));
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  pickChangeHandler = (tier, event) => {
    event = event.split(",");
    let value = parseInt(event[0]);
    let pick = event[1];
    console.log(event, "event");
    console.log(pick, "pick");
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
        homeworldValue: value,
        birthRightValue: null,
        lureValue: null,
        trailsValue: null,
        motivationValue: null,
        careerValue: null,
        done: null
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
        birthRightValue: value - 1,
        lureValue: null,
        trailsValue: null,
        motivationValue: null,
        careerValue: null,
        done: null
      });
      this.props.dispatch(
        clearStore(["Lure", "Trails", "Motivation", "Career", "done"])
      );
      value = this.state.homeworldValue + value - 1;
    }

    if (getTier === "Trails") {
      this.setState({
        lureValue: value - 1,
        trailsValue: null,
        motivationValue: null,
        careerValue: null,
        done: null
      });
      this.props.dispatch(
        clearStore(["Trails", "Motivation", "Career", "done"])
      );
      value =
        this.state.homeworldValue + this.state.birthRightValue + value - 1;
    }

    if (getTier === "Motivation") {
      this.setState({
        trailsValue: value - 1,
        motivationValue: null,
        careerValue: null,
        done: null
      });
      this.props.dispatch(clearStore(["Motivation", "Career", "done"]));
      value =
        this.state.homeworldValue +
        this.state.birthRightValue +
        this.state.lureValue +
        value -
        1;
    }

    if (getTier === "Career") {
      this.setState({
        motivationValue: value - 1,
        careerValue: null,
        done: null
      });
      this.props.dispatch(clearStore(["Career"]));
      value =
        this.state.homeworldValue +
        this.state.birthRightValue +
        this.state.lureValue +
        this.state.trailsValue +
        value;
    }

    if (getTier === "done") {
      this.setState({ done: true });
    }
    if (getTier !== "done") {
      this.props.dispatch(getOriginTier(getTier, value));
    }

    let tierPick = `${tier}Pick`;

    this.setState({ [tierPick]: pick });
  };

  createDropdown = (choiceArray, tier) => {
    return (
      <div>
        {tier}:{" "}
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
              <option key={idx} value={[idx, pick]}>
                {pick}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  render() {
    return (
      <div className='main'>
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
          {this.state.HomeworldPick ? (
            <Subsection pick={this.state.HomeworldPick} />
          ) : (
            ""
          )}
          {this.props.builder.tiers.Birthright
            ? this.createDropdown(
                this.props.builder.tiers.Birthright,
                "Birthright"
              )
            : ""}{" "}
          {this.state.BirthrightPick ? (
            <Subsection pick={this.state.BirthrightPick} />
          ) : (
            ""
          )}
          {this.props.builder.tiers.Lure
            ? this.createDropdown(this.props.builder.tiers.Lure, "Lure")
            : ""}{" "}
          {this.state.LurePick ? <Subsection pick={this.state.LurePick} /> : ""}
          {this.props.builder.tiers.Trails
            ? this.createDropdown(this.props.builder.tiers.Trails, "Trails")
            : ""}{" "}
          {this.state.TrailsPick ? (
            <Subsection pick={this.state.TrailsPick} />
          ) : (
            ""
          )}
          {this.props.builder.tiers.Motivation
            ? this.createDropdown(
                this.props.builder.tiers.Motivation,
                "Motivation"
              )
            : ""}{" "}
          {this.state.MotivationPick ? (
            <Subsection pick={this.state.MotivationPick} />
          ) : (
            ""
          )}
          {this.props.builder.tiers.Career
            ? this.createDropdown(this.props.builder.tiers.Career, "Career")
            : ""}{" "}
          {this.state.CareerPick ? (
            <Subsection pick={this.state.CareerPick} />
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(characterBuilder);
