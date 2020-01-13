import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoreInfo } from "../Store/Subsection/actions";
import Collapsible from "react-collapsible";
import { setChoice } from "../Store/Subsection/actions";

import "../css/subsection.css";

function mapStateToProps(state) {
  return {
    options: state.subsection
  };
}

class Subsection extends Component {
  state = {
    subpick: null
  };
  componentDidMount() {
    this.props.dispatch(getMoreInfo(this.props.pick));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.pick !== this.props.pick) {
      this.props.dispatch(getMoreInfo(this.props.pick));
    }
  }

  effectPrinter = effects => {
    return effects.map(effect => {
      let name = Object.keys(effect);

      if (effect[name].subchoice) {
        return (
          <div>
            <Collapsible trigger={name} open='true'>
              <p>{effect[name].description}</p>
              <select
                className='select-sub-css'
                onChange={event =>
                  this.setState({ subpick: event.target.value })
                }>
                <option>make a choice</option>
                {effect[name].choice.map(option => {
                  return <option value={option}>{option}</option>;
                })}
              </select>
            </Collapsible>
            {this.state.subpick && this.state.subpick !== "make a choice" ? (
              <Collapsible trigger={this.state.subpick}>
                <p>{effect[name].subchoice[this.state.subpick].description}</p>
                {effect[name].subchoice[this.state.subpick].choices && (
                  <select
                    className='select-sub-css'
                    onChange={event =>
                      this.props.dispatch(
                        setChoice(event.target.value, this.state.subpick)
                      )
                    }>
                    <option>make a choice</option>
                    {effect[name].subchoice[this.state.subpick].choices.map(
                      option => {
                        return <option value={option}>{option}</option>;
                      }
                    )}
                  </select>
                )}
              </Collapsible>
            ) : (
              ""
            )}
          </div>
        );
      }

      if (effect[name].choice) {
        return (
          <Collapsible trigger={name} open='true'>
            <p>{effect[name].description}</p>
            <select
              className='select-sub-css'
              onChange={event =>
                this.props.dispatch(
                  setChoice(event.target.value, Object.keys(effect))
                )
              }>
              <option>make a choice</option>
              {effect[name].choice.map(option => {
                return <option>{option}</option>;
              })}
            </select>
          </Collapsible>
        );
      }

      return (
        <Collapsible trigger={name}>
          <p>{effect[name]}</p>
        </Collapsible>
      );
    });
  };

  render() {
    const pick = this.props.pick;

    return (
      <div>
        {" "}
        {this.props.options[pick] ? (
          <div>
            <p>{this.props.options[pick].description}</p>
          </div>
        ) : (
          ""
        )}{" "}
        {this.props.options[pick] &&
          this.effectPrinter(this.props.options[pick].effects)}
      </div>
    );
    //   }
  }
}

export default connect(mapStateToProps)(Subsection);
