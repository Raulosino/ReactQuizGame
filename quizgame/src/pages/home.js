import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div class="homeBg generalBg">
            
            <div className="home"></div>
            <Link to = "/play"><button>Play</button></Link>
            <Link to = "/about"><button>About</button></Link>
        </div>
    );
};

export default Home;