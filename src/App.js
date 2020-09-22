import React from "react";
import { Switch, Route } from "react-router-dom";
import homePage from "./components/homePage";
import characterBuilder from "./components/characterBuilder/characterBuilder";
import "./css/App.css";
import statRoller from "./components/statRoller";
import charactersheet from "./components/charactersheet";

function App() {
  return (
    <div className="App ">
      <Switch>
        <Route exact path="/build" component={characterBuilder} />
        <Route exact path="/statroller" component={statRoller} />
        <Route path="/charactersheet/:id" component={charactersheet} />
        <Route path="/" component={homePage} />
      </Switch>
    </div>
  );
}

export default App;
