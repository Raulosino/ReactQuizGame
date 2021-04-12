import React from 'react'
import { Link } from 'react-router-dom';

export const General = () => {
    return (
        <div>
            general page
            <Link to='/'>
                <button type="button">Back to home</button>
            </Link>
        </div>
    )
}

export default General;
