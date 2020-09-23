import React from "react";

import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import portrait from "../images/d4pmlp9-34c845fc-2b01-4413-be7d-0aacf069c913.jpg";
import BaseComponent from "../helpers/BaseComponent.helper";

function mapStateToProps(state) {
  return { sheet: state.sheet };
}

class charactersheet extends BaseComponent {
  componentDidMount() {}
  render() {
    const sheet = this.props.sheet;
    return (
      sheet && (
        <div className="sheetContainer">
          <div className="sheet">
            <Container className="topRow">
              <Row>
                <Col sm={3}>
                  <img src={portrait} alt="portrait" className="portrait" />
                </Col>
                <Col sm={6}>
                  <div>
                    <p className="p"> Name: {sheet.name}</p>
                    <p className="p">
                      Homeworld: {sheet.originpath.Homeworld} / Career:
                      {sheet.career}{" "}
                    </p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div>
                    <p className="p">exp: {sheet.XP}</p>
                    <p className="p">spent: {sheet.XPspent}</p>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container className="skills">
              <Row>
                <Col className="skillDescription">Weapon Skill</Col>
                <Col className="skillDescription">Ballistic Skill</Col>
                <Col className="skillDescription">Strength</Col>
                <Col className="skillDescription">Toughness</Col>
                <Col className="skillDescription">Agility</Col>
                <Col className="skillDescription">Intelligence</Col>
                <Col className="skillDescription">Perception</Col>
                <Col className="skillDescription">Willpower</Col>
                <Col className="skillDescription"> Fellowship</Col>
              </Row>
              <Row>
                <Col>{sheet.characterstat["Weapon Skill"]}</Col>
                <Col>{sheet.characterstat["Ballistic Skill"]}</Col>
                <Col>{/* skill */ sheet.characterstat.Strength}</Col>
                <Col>{/* skill */ sheet.characterstat.Toughness}</Col>
                <Col>{/* skill */ sheet.characterstat.Agility}</Col>
                <Col>{/* skill */ sheet.characterstat.Intelligence}</Col>
                <Col>{/* skill */ sheet.characterstat.Perception}</Col>
                <Col>{/* skill */ sheet.characterstat.Willpower}</Col>
                <Col>{/* skill */ sheet.characterstat.Fellowship}</Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col className="outer">
                  <Col className="inner">
                    <h3> Skills</h3>
                    {/*skills div */}
                    <div>
                      Acrobatics Awareness Barter Blather Carouse Charm Chem-Use
                      Ciphers - Rogue Trader - Mercenary Cant - Nobilite
                      Encoding - Throne Agent - Inquisition - Astropath -
                      Underworld Climb Command Commerce Common Lore - Adeptus
                      Arbites - Adeptus Astartes - Adeptus Astra Telepathica -
                      Adeptus Mechanicus - Administratum - Ecclesiarchy -
                      Imperial Creed - Imperial Guard - Imperial Navy - Imperium
                      - Koronus Expanse - Machine Cult - Navis Nobilite - Orks -
                      Rogue Traders - Tech - Underworld - War Concealment
                      Contortionist Deceive Demolition Disguise Dodge Drive -
                      Ground Vehicle - Skimmer/Hover - Walker Evaluate Forbidden
                      Lore - Adeptus Astartes - Adeptus Mechanicus - Archeotech
                      - Daemonology - Heresy - the Inquisition - Mutants -
                      Navigators - Pirates - Psykers - the Warp - Xenos - Ordos
                      - Officio Assassinorum Gamble Inquiry Interrogation
                      Intimidate Invocation Lip Reading Literacy Logic Medicae
                      Navigation - Surface - Stellar - Warp Performer - Dancer -
                      Musician - Singer - Storyteller Pilot - Personal - Flyers
                      - Space Craft Psyniscience Scholastic Lore - Archaic -
                      Astromancy - Beasts - Bureaucracy - Chymistry - Codex
                      Astartes - Cryptology - Drusian Chronicles - Heraldry -
                      Imperial Warrants - Imperial Creed - Judgement - Legend -
                      Navis Nobilite - Numerology - Occult - Philosophy -
                      Tactica Imperialis Scrutiny Search Secret Tongue -
                      Administratum - Ecclesiarchy - Military - Navigator -
                      Throne Agent - Rogue Trader - Tech - Underdeck Security
                      Shadowing Silent Move Sleight of Hand Speak Language -
                      Eldar - Explorator Binary - High Gothic - Low Gothic - Ork
                      - Kroot - Stryxis - Tau - Hive Dialect - Ship Dialect -
                      Techna-Lingua - Trader's Cant Survival Swim Tactics - Air
                      Combat - Armoured Tactics - Assault Doctrine - Defensive
                      Doctrine - Orbital Drop Procedures - Recon and Stealth -
                      Void Combat Tech-Use Tracking Trade - Agri - Apothecary -
                      Archeologist - Armourer - Artist - Astrographer - Chymist
                      - Cryptographer - Explorator - Linguist - Remembrancer -
                      Scrimshawer - Shipwright - Soothsayer - Technomat - Trader
                      - Voidfarer - Smith - Tanner - Valet - Wright Wrangling
                    </div>
                  </Col>
                </Col>
                <Col className="outer">
                  <h3>Talents</h3>
                  <Table striped borderless hover>
                    <thead>
                      <tr>
                        <th>name</th>
                        <th>description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sheet.talents.map((talent) => {
                        return (
                          <tr>
                            <td>{talent.Name}</td>
                            <td>{talent.Description}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Col>
                <Col className="outer">
                  <Container>
                    <h3>damage and affliction</h3>
                    <Row>
                      <Col>Wounds: </Col>
                      <Col>
                        {sheet.damage.currentWounds}/{sheet.damage.maxWounds}
                      </Col>
                    </Row>

                    <Row>
                      <Col>Fate: </Col>
                      <Col>
                        {sheet.damage.currentFate}/{sheet.damage.maxFate}
                      </Col>
                    </Row>
                    <Row>
                      <Col>Corruption: </Col>
                      <Col>{sheet.damage.corruption}</Col>
                    </Row>
                    <Row>
                      <Col>Insanity: </Col>
                      <Col>{sheet.damage.insanity}</Col>
                    </Row>
                  </Container>
                  <Container>
                    <h3>weapons</h3>
                    <Row>
                      <Col>Lasgun</Col>
                      <Col>2d6 + BS</Col>
                    </Row>
                    <Row>
                      <Col>Chainsword</Col>
                      <Col>3ds + WS</Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col>{/*ship stuff */}</Col>
                <Col>{/* armor stuff */}</Col>
              </Row>
            </Container>
          </div>
        </div>
      )
    );
  }
}

export default connect(mapStateToProps)(charactersheet);
