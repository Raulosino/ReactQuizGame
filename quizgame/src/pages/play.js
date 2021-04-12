import React from 'react';
import { Link } from 'react-router-dom';

const Play = () => {
    return (
        <div>
            <h1>This is Play Page</h1>
            <Link to='/developer'>
                <button type="button">developer</button>
            </Link>
            <Link to='/general'>
                <button type="button">general</button>
            </Link>
            <Link to='/'>
                <button type="button">Back to home</button>
            </Link>
        </div>
    );
};

export default Play;