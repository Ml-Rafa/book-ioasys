import Login from "./pages/login";
import Home from "./pages/home";
import React from "react";
// import { Switch } from "react-router-dom";
// import { Route } from "react-router-dom";
import {Switch, Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
