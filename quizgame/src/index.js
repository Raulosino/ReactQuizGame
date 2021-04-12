import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Developer from "./pages/developer";
import General from "./pages/general";

import Home from "./pages/home";
import Play from "./pages/play";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/play"><Play /></Route>
        <Route path="/about"><About /></Route>
        <Route path='/developer'><Developer/></Route>
        <Route path='/general'><General/></Route>


      </Switch>
    </Router>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
