import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>This is the home page</h1>
            <Link to = "/play"><button>Play</button></Link>
            <Link to = "/about"><button>About</button></Link>
        </div>
    );
};

export default Home;