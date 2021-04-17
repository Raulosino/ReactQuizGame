import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";

import About from "./pages/about";
import Developer from "./pages/developer";
import General from "./pages/general";
import Home from "./pages/home";
import Play from "./pages/play";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import './buttons.css'



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/play">
          <Play />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/developer">
          <Developer />
        </Route>
        <Route path="/general">
          <General />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById("root")
);
