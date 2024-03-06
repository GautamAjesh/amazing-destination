import React from 'react';
import homeimg from '../images/homeimg.jpeg';
import './home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="homeupper">
                <h1 className="home-heading">Welcome to Amazing Destination</h1>
                <p className="home-paragraph">Find your next destination and start planning your trip.</p>
            </div>
            <div className='search-container'>
                <div className="search">
                    <input type="text" placeholder="Search for your next destination" />
                    <button>Search</button>
                </div>
            </div>
            <div>
                <img src={homeimg} alt="homeimg" className="homeimg" />
            </div>
        </div>
    );
};

export default Home;
