import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleBookRoomClick = () => {
        navigate('/rooms'); // Navigate to the '/book-room' route
    };

    return (
        <div className="home-container">
            <h1>SAWATA GUEST HOUSE</h1>
            <p>Every house guest brings you happiness..</p>
            <p>Some when they arrive, and Some when they are leaving</p>
            <p>(here you will get comfy rooms)</p>
            <button className="book-room-button" onClick={handleBookRoomClick}>Book a Room</button>
        </div>
    );
};

export default Home;

