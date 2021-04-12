import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./pages/about";

import Home from "./pages/home";
import Play from "./pages/play";

const App = () => {
  return (
      <Router>
            <Switch>
                <Route exact path = "/"><Home/></Route>
                <Route path = "/play"><Play/></Route>
                <Route path = "/about"><About/></Route>
            </Switch>
      </Router>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
