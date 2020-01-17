import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { sumbitStateAction } from "../Store/statsRoller/actions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function mapStateToProps(state) {
  return { stats: state.stats, sheet: state.sheet };
}

class statRoller extends Component {
  state = {
    "Weapon Skill": 0,
    "Ballistic Skill": 0,
    Strength: 0,
    Toughness: 0,
    Agility: 0,
    Intelligence: 0,
    Perception: 0,
    Willpower: 0,
    Fellowship: 0,
    cor: 0,
    ins: 0,
    fate: 0,
    wound: 0
  };

  submitStats = event => {
    event.preventDefault();

    let rolledValues = this.state;
    let base = 25;
    let others = this.props.stats.stats;

    let stats = { ...this.state };
    const statList = [
      "Weapon Skill",
      "Ballistic Skill",
      "Strength",
      "Toughness",
      "Agility",
      "Intelligence",
      "Perception",
      "Willpower",
      "Fellowship"
    ];

    statList.forEach(
      value => (stats[value] = rolledValues[value] + base + others[value])
    );

    this.props.dispatch(sumbitStateAction(stats, this.props.stats.stats.id));
    this.setState({ submit: true });
  };

  statRoller = () => {
    const statlist = [
      "Weapon Skill",
      "Ballistic Skill",
      "Strength",
      "Toughness",
      "Agility",
      "Intelligence",
      "Perception",
      "Willpower",
      "Fellowship"
    ];

    statlist.forEach(entry => {
      const roll1 = Math.ceil(Math.random() * 10);
      const roll2 = Math.ceil(Math.random() * 10);
      console.log(roll1);
      console.log(roll2);

      const total = roll1 + roll2;

      this.setState({ [entry]: total });
    });
  };

  //   componentDidMount() {
  //     this.props.dispatch(getStats(30)); //just for testing
  //   }
  numberChange = event => {
    const value = parseInt(event.target.value);
    this.setState({ [event.target.name]: value });
  };
  render() {
    const stats = this.props.stats.stats;
    return (
      <div className='statRollerContainer'>
        <div className='statRoller'>
          {stats ? (
            <div>
              <h1> Ability Scores </h1>
              <button onClick={this.statRoller}>roll random stats</button>
              <Container>
                <Row>
                  <Col>Weapon Skill</Col>
                  <Col>Ballistic Skill</Col>
                  <Col>Strength</Col>
                </Row>
                <Row>
                  <Col>Total Score</Col>
                  <Col>
                    {this.state["Weapon Skill"] + 25 + stats["Weapon Skill"]}
                  </Col>
                  <Col>Total Score</Col>
                  <Col>
                    {this.state["Ballistic Skill"] +
                      25 +
                      stats["Ballistic Skill"]}
                  </Col>

                  <Col>Total Score</Col>
                  <Col>{this.state["Strength"] + 25 + stats["Strength"]}</Col>
                </Row>
                <Row>
                  <Col>Rolled</Col>
                  <Col>
                    <input
                      type='number'
                      name='"Weapon Skill"'
                      value={this.state["Weapon Skill"]}
                      onChange={this.numberChange}
                    />
                  </Col>
                  <Col>Rolled</Col>
                  <Col>
                    <input
                      type='number'
                      name='"Ballistic Skill"'
                      value={this.state["Ballistic Skill"]}
                      onChange={this.numberChange}
                    />
                  </Col>
                  <Col>Rolled</Col>
                  <Col>
                    {" "}
                    <input
                      type='number'
                      name='"Strength"'
                      value={this.state["Strength"]}
                      onChange={this.numberChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>Base Score</Col>
                  <Col>25</Col>
                  <Col>Base Score</Col>
                  <Col>25</Col>
                  <Col>Base Score</Col>
                  <Col>25</Col>
                </Row>
                <Row>
                  <Col>Other</Col>
                  <Col>{stats["Weapon Skill"] ? stats["Weapon Skill"] : 0}</Col>
                  <Col>Other</Col>

                  <Col>
                    {stats["Balistic Skill"] ? stats["Balistic Skill"] : 0}
                  </Col>
                  <Col>Other</Col>
                  <Col>{stats["Strength"] ? stats["Strength"] : 0}</Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col>Toughness</Col>
                  <Col>Agilty</Col>
                  <Col>Intelligence</Col>
                </Row>
                <Row>
                  <Col>Total Score</Col>
                  <Col>{this.state["Toughness"] + 25 + stats["Toughness"]}</Col>

                  <Col>Total Score</Col>
                  <Col>{this.state["Agility"] + 25 + stats["Agility"]}</Col>

                  <Col>Total Score</Col>
                  <Col>
                    {this.state["Intelligence"] + 25 + stats["Intelligence"]}
                  </Col>
                </Row>
                <Row>
                  <Col>Rolled</Col>
                  <Col>
                    <input
                      type='number'
                      name='"Toughness"'
                      value={this.state["Toughness"]}
                      onChange={this.numberChange}
                    />
                  </Col>
                  <Col>Rolled</Col>
                  <Col>
                    <input
                      type='number'
                      name='"Agility"'
                      value={this.state["Agility"]}
                      onChange={this.numberChange}
                    />
                  </Col>
                  <Col>Rolled</Col>
                  <Col>
                    <input
                      type='number'
                      name='"Intelligence"'
                      value={this.state["Intelligence"]}
                      onChange={this.numberChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>Base Score</Col>
                  <Col>25</Col>
                  <Col>Base Score</Col>
                  <Col>25</Col>
                  <Col>Base Score</Col>
                  <Col>25</Col>
                </Row>
                <Row>
                  <Col>Other</Col>
                  <Col>{stats["Toughness"] ? stats["Toughness"] : 0}</Col>

                  <Col>Other</Col>
                  <Col>{stats["Agility"] ? stats["Agility"] : 0}</Col>

                  <Col>Other</Col>
                  <Col>{stats["Intelligence"] ? stats["Intelligence"] : 0}</Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col>Perception</Col>
                  <Col>WillPower</Col>

                  <Col>FellowShip</Col>
                </Row>
                <Row>
                  <Col>Total Score</Col>
                  <Col>
                    {this.state["Perception"] + 25 + stats["Perception"]}
                  </Col>

                  <Col>Total Score</Col>
                  <Col>{this.state["Willpower"] + 25 + stats["Willpower"]}</Col>

                  <Col>Total Score</Col>
                  <Col>
                    {this.state["Fellowship"] + 25 + stats["Fellowship"]}
                  </Col>
                </Row>
                <Row>
                  <Col>Rolled</Col>
                  <Col>
                    <input
                      type='number'
                      name='"Perception"'
                      value={this.state["Perception"]}
                      onChange={this.numberChange}
                    />
                  </Col>
                  <Col>Rolled</Col>
                  <Col>
                    <input
                      type='number'
                      name='"Willpower"'
                      value={this.state["Willpower"]}
                      onChange={this.numberChange}
                    />
                  </Col>
                  <Col>Rolled</Col>
                  <Col>
                    <input
                      type='number'
                      name='"Fellowship"'
                      value={this.state["Fellowship"]}
                      onChange={this.numberChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>Base Score</Col>
                  <Col>25</Col>
                  <Col>Base Score</Col>
                  <Col>25</Col>
                  <Col>Base Score</Col>
                  <Col>25</Col>
                </Row>
                <Row>
                  <Col>Other</Col>
                  <Col>{stats["Perception"] ? stats["Perception"] : 0}</Col>

                  <Col>Other</Col>
                  <Col>{stats["Willpower"] ? stats["Willpower"] : 0}</Col>

                  <Col>Other</Col>
                  <Col>{stats["Fellowship"] ? stats["Fellowship"] : 0}</Col>
                </Row>
              </Container>
              <div>
                <Container>
                  <h2> Other Stats</h2>
                  <Row>
                    <Col>Corruption:</Col>
                    <Col>
                      {" "}
                      Roll {stats["Corruption d5"] || 0}d5 and{" "}
                      {stats["Corruption d10"] || 0}d10
                    </Col>
                    <Col>
                      result:{" "}
                      <input
                        type='number'
                        name='cor'
                        value={this.state.cor}
                        onChange={this.numberChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>Insanity:</Col>
                    <Col>
                      {" "}
                      Roll {stats["Insanity d5"] || 0}d5 and{" "}
                      {stats["Insanity d10"] || 0}d10
                    </Col>
                    <Col>
                      result:{" "}
                      <input
                        type='number'
                        name='ins'
                        value={this.state.ins}
                        onChange={this.numberChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>Wounds: </Col>
                    <Col>
                      {" "}
                      Roll{stats["Wounds d5"] || 0}d5 and{" "}
                      {stats["Wounds d10"] || 0}d10{" "}
                    </Col>
                    <Col>
                      result:{" "}
                      <input
                        type='number'
                        name='wound'
                        value={this.state.wound}
                        onChange={this.numberChange}
                      />{" "}
                    </Col>
                  </Row>
                  <Row>
                    <Col>Fate: </Col>
                    <Col> Roll {stats["Fate d10"] || 0}d10 </Col>
                    <Col>
                      result:{" "}
                      <input
                        type='number'
                        name='fate'
                        value={this.state.fate}
                        onChange={this.numberChange}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
              <div>
                <button onClick={this.submitStats}>submit</button>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
          {this.props.sheet && (
            <Redirect to={`charactersheet/${this.props.sheet.id}`} />
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(statRoller);
