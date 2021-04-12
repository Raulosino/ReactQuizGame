import React from 'react'
import { Link } from 'react-router-dom';

export const Developer = () => {
    return (
        <div>
            developer page
            <Link to='/'>
                <button type="button">Back to home</button>
            </Link>
        </div>
    )
}

export default Developer;
