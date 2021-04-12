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
            <Link to = "/play"><button>Play</button></Link>
            <Link to = "/about"><button>About</button></Link>

      </Router>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
