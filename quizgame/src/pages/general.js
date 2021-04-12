import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux'



import { getDataGeneral, getDataCelebrities, getDataGeography } from '../actions'

import Films from '../components/general/films';
import GeneralKnowledge from '../components/general/general-knowledge';
import Geography from '../components/general/geography';
import History from '../components/general/history';
import Music from '../components/general/music';
import Tv from '../components/general/tv';
import Vehicles from '../components/general/vehicles';
import Celebrities from '../components/general/celebrities';
import Sports from '../components/general/sports';





const General = (props) => {

    let { path } = useRouteMatch();

    const getGeneral = () => {
        props.dispatch(getDataGeneral())
    }

    const getGeo = () => {
        props.dispatch(getDataGeography())
    }

    const getCelebrity = () => {
        props.dispatch(getDataCelebrities())
    }



    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <div>
                        <Link to={`${path}/celebrities`}> <div onClick={getCelebrity}>Celebrities</div> </Link>
                        <Link to={`${path}/films`}>films  </Link>
                        <Link to={`${path}/generalknowledge`}> <div onClick={getGeneral}>General Knowledge</div> </Link>
                        <Link to={`${path}/geography`}> <div onClick={getGeo}>Geography</div> </Link>
                        <Link to={`${path}/history`}>history </Link>
                        <Link to={`${path}/music`}>music </Link>
                        <Link to={`${path}/sports`}>sports </Link>
                        <Link to={`${path}/tv`}>tv </Link>
                        <Link to={`${path}/vehicles`}>vehicles </Link>
                        <Link to='/'>
                            <button type="button">Back to home</button>
                        </Link>
                    </div>
                </Route>
                <Route path={path + "/celebrities"}><Celebrities /></Route>
                <Route path={path + "/films"}><Films /></Route>
                <Route path={path + "/generalknowledge"}><GeneralKnowledge /></Route>
                <Route path={path + "/geography"}><Geography /></Route>
                <Route path={path + "/history"}><History /></Route>
                <Route path={path + "/music"}><Music /></Route>
                <Route path={path + "/sports"}><Sports /></Route>
                <Route path={path + "/tv"}><Tv /></Route>
                <Route path={path + "/vehicles"}><Vehicles /></Route>
            </Switch>
        </>
    )
}

export default connect(null)(General);
