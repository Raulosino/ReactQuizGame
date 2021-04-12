import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>This is about Page</h1>
            <Link to='/'>
                <button type="button">Back to home</button>
            </Link>
        </div>
    );
};

export default About;