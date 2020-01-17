import React, { Component } from "react";
import { connect } from "react-redux";
import { getOriginTier, clearStore } from "../Store/Builder/actions";
import "../css/builder.css";
import Subsection from "./Subsection";
import { setChoice } from "../Store/Subsection/actions";
import { submitAction } from "../Store/FormInfo/actions";

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

  submitChoices = event => {
    event.preventDefault();

    this.props.dispatch(submitAction(this.state.name));
    this.props.history.push("/statroller");
  };

  pickChangeHandler = (tier, event) => {
    // needs some work on readability
    event = event.split(",");
    let value = parseInt(event[0]);
    let pick = event[1];

    this.props.dispatch(setChoice(pick, tier));
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
        done: null,
        BirthrightPick: "",
        LurePick: "",
        TrailsPick: "",
        MotivationPick: "",
        CareerPick: ""
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
        done: null,
        LurePick: "",
        TrailsPick: "",
        MotivationPick: "",
        CareerPick: ""
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
        done: null,
        TrailsPick: "",
        MotivationPick: "",
        CareerPick: ""
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
        done: null,
        MotivationPick: "",
        CareerPick: ""
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
        done: null,
        CareerPick: ""
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
          className='select-css'
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
      <div className='builderContainer'>
        <div className='main'>
          <form className='form' onSubmit={event => this.submitChoices(event)}>
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
            {this.state.HomeworldPick && this.props.builder.tiers.Homeworld && (
              <Subsection pick={this.state.HomeworldPick} />
            )}
            {this.props.builder.tiers.Birthright
              ? this.createDropdown(
                  this.props.builder.tiers.Birthright,
                  "Birthright"
                )
              : ""}{" "}
            {this.state.BirthrightPick &&
            this.props.builder.tiers.Birthright ? (
              <Subsection pick={this.state.BirthrightPick} />
            ) : (
              ""
            )}
            {this.props.builder.tiers.Lure
              ? this.createDropdown(this.props.builder.tiers.Lure, "Lure")
              : ""}{" "}
            {this.state.LurePick && this.props.builder.tiers.Lure ? (
              <Subsection pick={this.state.LurePick} />
            ) : (
              ""
            )}
            {this.props.builder.tiers.Trails
              ? this.createDropdown(this.props.builder.tiers.Trails, "Trails")
              : ""}{" "}
            {this.state.TrailsPick && this.props.builder.tiers.Trails ? (
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
            {this.state.MotivationPick &&
            this.props.builder.tiers.Motivation ? (
              <Subsection pick={this.state.MotivationPick} />
            ) : (
              ""
            )}
            {this.props.builder.tiers.Career
              ? this.createDropdown(this.props.builder.tiers.Career, "Career")
              : ""}{" "}
            {this.state.CareerPick && this.props.builder.tiers.Career ? (
              <Subsection pick={this.state.CareerPick} />
            ) : (
              ""
            )}
            {this.state.done && (
              <div>
                <button>submit</button>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(characterBuilder);
