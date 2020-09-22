import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/builder.css";
import BirthrightOptions from "./BirthrightOptions";
import CareerOptions from "./CareerOptions";
import CharacterBuilderHeader from "./CharacterBuilderHeader";
import CharacterBuilderOptions from "./CharacterBuilderOptions";
import HomeWorldOptions from "./HomeWorldOptions";
import LureOptions from "./LureOptions";
import MotivationOptions from "./MotivationOptions";
import TrailsOptions from "./TrailsOptions";

function mapStateToProps(state) {
  return { originPath: state.builder };
}

class CharacterBuilder extends Component {
  state = {
    subPageIndex: 0,
  };

  renderSubpage() {
    switch (this.state.subPageIndex) {
      case 0:
        return (
          <CharacterBuilderOptions changeSubpage={this.handleSubpageChange} />
        );

      case 1:
        return <HomeWorldOptions changeSubpage={this.handleSubpageChange} />;

      case 2:
        return <BirthrightOptions changeSubpage={this.handleSubpageChange} />;

      case 3:
        return <LureOptions changeSubpage={this.handleSubpageChange} />;

      case 4:
        return <TrailsOptions changeSubpage={this.handleSubpageChange} />;

      case 5:
        return <MotivationOptions changeSubpage={this.handleSubpageChange} />;

      case 6:
        return <CareerOptions changeSubpage={this.handleSubpageChange} />;

      default:
        break;
    }
  }

  handleSubpageChange = (index) => {
    this.setState({ subPageIndex: index });
  };

  render() {
    return (
      <div className="characterBuilderContainer">
        <CharacterBuilderHeader subPageIndex={this.state.subPageIndex} />
        {this.renderSubpage()}
      </div>
    );
  }
}
export default connect(mapStateToProps)(CharacterBuilder);
