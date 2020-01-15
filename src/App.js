import React from "react";
import { Switch, Route } from "react-router-dom";
import homePage from "./components/homePage";
import characterBuilder from "./components/characterBuilder";
import "./css/App.css";

function App() {
  return (
    <div className='App'>
      <div className='body'>
        <Switch>
          <Route route='/build' component={characterBuilder} />
          <Route route='/' component={homePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
