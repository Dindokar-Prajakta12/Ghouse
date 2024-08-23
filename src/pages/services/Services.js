import React from 'react';
import './Services.css'; // Optional: Create a CSS file for styling

const Services = () => {
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <div className="services-list">
                <div className="service-item">
                    <h2>Room Service</h2>
                    <p>Enjoy 24/7 room service with a wide range of culinary delights.</p>
                </div>
                <div className="service-item">
                    <h2>Spa and Wellness</h2>
                    <p>Relax and rejuvenate with our spa and wellness services.</p>
                </div>
                <div className="service-item">
                    <h2>Free Wi-Fi</h2>
                    <p>Stay connected with high-speed internet access throughout the guest house.</p>
                </div>
                <div className="service-item">
                    <h2>Maintenance</h2>
                    <p> Keeping equipment and facilities in good condition, including repairs and landscaping 
                    </p>
                </div>
                <div className="service-item">
                    <h2>Front desk</h2>
                    <p> Handling guest queries and complaints, and providing check-in and check-out services</p>
                </div>
                <div className="service-item">
                    <h2>security</h2>
                    <p>Providing security personnel and implementing security measures like CCTV cameras and access control systems.</p>
                </div>
                <div className="service-item">
                    <h2>Housekeeping</h2>
                    <p>Cleaning rooms, bathrooms, and common areas</p>
                </div>
                
            </div>
        </div>
    );
};

export default Services;