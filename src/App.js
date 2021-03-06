import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import characterBuilder from "./components/characterBuilder/characterBuilder";
import "./css/App.css";
import charactersheet from "./components/charactersheet";

function App() {
  return (
    <div className="App ">
      <Switch>
        <Route exact path="/build" component={characterBuilder} />
        <Route path="/charactersheet/:id" component={charactersheet} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
