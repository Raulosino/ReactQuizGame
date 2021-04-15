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
import { Button, Card, Col, Container, Row } from "react-bootstrap";

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

  const categories = [
    "Celebrities",
    "Films",
    "General Knowledge",
    "Geography",
    "History",
    "Music",
    "Sports",
    "Television",
    "Vehicles",
  ];

  return (
    <div className="gen-bground generalBg">
      <div className="scoreBox">
        <div className="coin"></div>
        <div className="score">{props.data}</div>
      </div>

      <Switch>
        <Route exact path={path}>
          <Container className="mainContainer">
            <Row>
              <Col lg={4}>
                <Link to={`${path}/celebrities`}>
                  <Card onClick={getCelebrity}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Celebrities</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col lg={4}>
                <Link to={`${path}/films`}>
                  <Card onClick={getFilms}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Films</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col lg={4}>
                <Link to={`${path}/generalknowledge`}>
                  {" "}
                  <Card onClick={getGeneral}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>General Knowledge</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Link to={`${path}/geography`}>
                  {" "}
                  <Card onClick={getGeo}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Geography</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col lg={4}>
                <Link to={`${path}/history`}>
                  {" "}
                  <Card onClick={getHistory}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>History</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col lg={4}>
                <Link to={`${path}/music`}>
                  {" "}
                  <Card onClick={getMusic}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Music</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Link to={`${path}/sports`}>
                  {" "}
                  <Card onClick={getSports}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Sports</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col lg={4}>
                <Link to={`${path}/tv`}>
                  {" "}
                  <Card onClick={getTv}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Television</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col lg={4}>
                <Link to={`${path}/vehicles`}>
                  {" "}
                  <Card onClick={getVehicle}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Vehicles</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
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
