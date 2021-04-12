import React from 'react'
import { Link } from 'react-router-dom';
import GeneralKnowledge from '../components/general/general-knowledge'

const General = () => {
    return (
        <div>
            <GeneralKnowledge/>
            general page
            <Link to='/'>
                <button type="button">Back to home</button>
            </Link>
        </div>
    )
}

export default General;
