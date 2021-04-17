import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

import {
  getDataGeneral,
  getDataCelebrities,
  getDataGeography,
  getDataHistory,
  getDataSports,
  getDataTv,
  getDataVehicle,
  getDataFilms,
  getDataMusic,
} from "../actions";

import Films from "../components/general/films";
import GeneralKnowledge from "../components/general/general-knowledge";
import Geography from "../components/general/geography";
import History from "../components/general/history";
import Music from "../components/general/music";
import Tv from "../components/general/tv";
import Vehicles from "../components/general/vehicles";
import Celebrities from "../components/general/celebrities";
import Sports from "../components/general/sports";
import { Button, Card, div, Container, Row } from "react-bootstrap";

import CelebritiesBg from "../img/celebritiesBg.png";
import FilmsBg from "../img/filmsBg.jpg";
import GenKnowledgeBg from "../img/genKnowledgeBg.jpg";
import GeographyBg from "../img/geographyBg.jpg";
import HistoryBg from "../img/historyBg.jpg";
import MusicBg from "../img/musicBg.jpg";
import SportsBg from "../img/sportsBg.jpg";
import VehiclesBg from "../img/vehicleBg.jpg";

const General = (props) => {
  const getHistory = () => {
    props.dispatch(getDataHistory());
  };

  const getGeneral = () => {
    props.dispatch(getDataGeneral());
  };

  const getSports = () => {
    props.dispatch(getDataSports());
  };

  const getGeo = () => {
    props.dispatch(getDataGeography());
  };

  const getCelebrity = () => {
    props.dispatch(getDataCelebrities());
  };

  const getTv = () => {
    props.dispatch(getDataTv());
  };

  const getVehicle = () => {
    props.dispatch(getDataVehicle());
  };

  const getFilms = () => {
    props.dispatch(getDataFilms());
  };

  const getMusic = () => {
    props.dispatch(getDataMusic());
  };

  let { path } = useRouteMatch();

  return (
    <div className="gen-bg generalBg">
      <div className="scoreBox">
        <div className="coin"></div>
        <div className="score">{props.data}</div>
      </div>

      <Switch>
        <Route exact path={path}>
          <Container className="mainContainer">
            <Row className="d-flex flex-wrap justify-content-around mt-5">
              <div className="categoryBox">
                <Link to={`${path}/celebrities`}>
                  <div onClick={getCelebrity}>
                    <img src={CelebritiesBg} width="150" height="90" />
                    <h3>Celebrities</h3>
                  </div>
                </Link>
              </div>
              <div className="categoryBox">
                <Link to={`${path}/films`}>
                  <div onClick={getFilms}>
                    <img src={FilmsBg} width="150" height="90" />
                    <h3>Films</h3>
                  </div>
                </Link>
              </div>
              <div className="categoryBox">
                <Link to={`${path}/generalknowledge`}>
                  {" "}
                  <div onClick={getGeneral}>
                    <img src={GenKnowledgeBg} width="150" height="90" />
                    <h3>General</h3>
                  </div>
                </Link>
              </div>
            </Row>
            <Row className="d-flex flex-wrap justify-content-around mt-4">
              <div className="categoryBox">
                <Link to={`${path}/geography`}>
                  {" "}
                  <div onClick={getGeo}>
                    <img src={GeographyBg} width="150" height="90" />
                    <h3>Geography</h3>
                  </div>
                </Link>
              </div>
              <div className="categoryBox">
                <Link to={`${path}/history`}>
                  {" "}
                  <div onClick={getHistory}>
                    <img src={HistoryBg} width="150" height="90" />
                    <h3>History</h3>
                  </div>
                </Link>
              </div>
              <div className="categoryBox">
                <Link to={`${path}/music`}>
                  {" "}
                  <div onClick={getMusic}>
                    <img src={MusicBg} width="150" height="90" />
                    <h3>Music</h3>
                  </div>
                </Link>
              </div>
            </Row>
            <Row className="d-flex flex-wrap justify-content-around mt-4">
              <div className="categoryBox">
                <Link to={`${path}/sports`}>
                  {" "}
                  <div onClick={getSports}>
                    <img src={SportsBg} width="150" height="90" />
                    <h3>Sports</h3>
                  </div>
                </Link>
              </div>
              <div className="categoryBox">
                <Link to={`${path}/tv`}>
                  {" "}
                  <div onClick={getTv}>
                    <img src={GenKnowledgeBg} width="150" height="90" />
                    <h3>Television</h3>
                  </div>
                </Link>
              </div>
              <div className="categoryBox">
                <Link to={`${path}/vehicles`}>
                  {" "}
                  <div onClick={getVehicle}>
                    <img src={VehiclesBg} width="150" height="90" />
                    <h3>Vehicles</h3>
                  </div>
                </Link>
              </div>
            </Row>
            <Link to="/">
              <button type="button">Back to home</button>
            </Link>
          </Container>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.resultScore,
  };
};

export default connect(mapStateToProps)(General);
