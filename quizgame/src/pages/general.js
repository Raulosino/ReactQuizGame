import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

import { getDataGeneral, getDataHistory, getDataSports } from "../actions";

import Films from "../components/general/films";
import GeneralKnowledge from "../components/general/general-knowledge";
import Geography from "../components/general/geography";
import History from "../components/general/history";
import Music from "../components/general/music";
import Tv from "../components/general/tv";
import Vehicles from "../components/general/vehicles";
import Celebrities from "../components/general/celebrities";
import Sports from "../components/general/sports";

const General = (props) => {
  const getSomething = () => {
    props.dispatch(getDataGeneral());
  };

  const getHistory = () => {
    props.dispatch(getDataHistory());
  };

  const getSports = () => {
    props.dispatch(getDataSports());
  };

  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <div>
            <Link to={`${path}/celebrities`}>Celebrities </Link>
            <Link to={`${path}/films`}>films </Link>
            <Link to={`${path}/generalknowledge`}>
              {" "}
              <div onClick={getSomething}>general knowledge</div>{" "}
            </Link>
            <Link to={`${path}/geography`}>geography </Link>
            <Link to={`${path}/history`}>
              <div onClick={getHistory}>History</div>{" "}
            </Link>
            <Link to={`${path}/music`}>music </Link>
            <Link to={`${path}/sports`}>
              <div onClick={getSports}>Sports</div>{" "}
            </Link>
            <Link to={`${path}/tv`}>tv </Link>
            <Link to={`${path}/vehicles`}>vehicles </Link>
            <Link to="/">
              <button type="button">Back to home</button>
            </Link>
          </div>
        </Route>
        <Route path={path + "/celebrities"}>
          <Celebrities />
        </Route>
        <Route path={path + "/films"}>
          <Films />
        </Route>
        <Route path={path + "/generalknowledge"}>
          <GeneralKnowledge />
        </Route>
        <Route path={path + "/geography"}>
          <Geography />
        </Route>
        <Route path={path + "/history"}>
          <History />
        </Route>
        <Route path={path + "/music"}>
          <Music />
        </Route>
        <Route path={path + "/sports"}>
          <Sports />
        </Route>
        <Route path={path + "/tv"}>
          <Tv />
        </Route>
        <Route path={path + "/vehicles"}>
          <Vehicles />
        </Route>
      </Switch>
    </>
  );
};

export default connect(null)(General);
