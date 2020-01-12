import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoreInfo } from "../Store/Subsection/actions";
import Collapsible from "react-collapsible";

import "../css/subsection.css";

function mapStateToProps(state) {
  return {
    options: state.subsection
  };
}

class Subsection extends Component {
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

      if (effect[name].choice) {
        return (
          <Collapsible trigger={name} open='true'>
            <select className='select-sub-css'>
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
