import React from "react";
import { Switch, Route } from "react-router-dom";
import homePage from "./components/homePage";
import characterBuilder from "./components/characterBuilder";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route route='/build' component={characterBuilder} />
        <Route route='/' component={homePage} />
      </Switch>
    </div>
  );
}

export default App;
