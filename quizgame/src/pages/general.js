import React from 'react'
import { Link } from 'react-router-dom';
import GeneralKnowledge from '../components/general/general-knowledge'
import {connect} from 'react-redux'

import { getDataGeneral } from '../actions'
const General = (props) => {


    const getSomething = () => {

        props.dispatch(getDataGeneral())
    }


    return (
        <div>
            <GeneralKnowledge />
            general page
            <div onClick={getSomething}>
                general Knowledge
            </div>
            <Link to='/'>
                <button type="button">Back to home</button>
            </Link>
        </div>
    )
}

export default connect (null)(General);
