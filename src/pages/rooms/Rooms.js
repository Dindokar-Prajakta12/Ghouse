import React from 'react';
import './Rooms.css';

const roomsData = [
    {
        id: 1,
        name: "Deluxe Room",
        price: "$120 per night",
        rating: 4.5,
        features: ["Free Wi-Fi", "Breakfast Included", "Sea View"],
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/7e/6e/2a/cpwd-guest-house-cochin.jpg?w=700&h=-1&s=1"
    },
    {
        id: 2,
        name: "Standard Room",
        price: "$80 per night",
        rating: 4.0,
        features: ["Free Wi-Fi", "Garden View"],
        image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/373715519.jpg?k=7ddc15f73a0646b34f56db0eaee71915e1f50129732bea67c94cc7e93be02b8a&o="
    },
    {
        id: 3,
        name: "Suite",
        price: "$200 per night",
        rating: 5.0,
        features: ["Free Wi-Fi", "Breakfast Included", "Sea View", "Mini Bar"],
        image: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg"
    },
    {
        id: 4,
        name: "Family Room",
        price: "$150 per night",
        rating: 4.8,
        features: ["Free Wi-Fi", "Breakfast Included", "Kids Friendly", "Pool Access"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9tcwgBY3SqUEO5OTvUa9wb_cFij7UJBKkgA&s"
    },
    {
        id: 5,
        name: "Single Room",
        price: "$50 per night",
        rating: 3.9,
        features: ["Free Wi-Fi", "City View"],
        image: "https://images.bestwestern.com/bwi/brochures/44471/photos/1024/28191839.jpg"
    },
    {
        id: 6,
        name: "Double Room",
        price: "$90 per night",
        rating: 4.2,
        features: ["Free Wi-Fi", "Mountain View"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkniN4_-thu0l7ISMtyGa5G08qDnaEEfuX1w&s"
    },
    {
        id: 7,
        name: "Presidential Suite",
        price: "$500 per night",
        rating: 5.0,
        features: ["Free Wi-Fi", "Private Pool", "Personal Butler", "Ocean View"],
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShg5mUCtzLtXxXiGCkVBcysMI78PTsR3AjIw&s"
    },
    {
        id: 8,
        name: "Economy Room",
        price: "$40 per night",
        rating: 3.5,
        features: ["Free Wi-Fi", "Shared Bathroom"],
        image: "https://hotelandra.com/wp-content/uploads/2022/01/Andra2483-Andra-Queen-Queen.jpg"
    },
    {
        id: 9,
        name: "Penthouse Suite",
        price: "$400 per night",
        rating: 4.9,
        features: ["Free Wi-Fi", "Private Terrace", "City Skyline View", "Jacuzzi"],
        image: "https://www.stlaurnhotels.com/pune/images/executive-twin.jpg"
    },
    {
        id: 10,
        name: "Honeymoon Suite",
        price: "$300 per night",
        rating: 4.7,
        features: ["Free Wi-Fi", "Romantic Decor", "Private Balcony", "Champagne Service"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4eXbmgJ56LR79gKBuUlb3WKZGuO-bQ5gog&s"
    },
    {
        id: 11,
        name: "Executive Suite",
        price: "$350 per night",
        rating: 4.9,
        features: ["Free Wi-Fi", "Office Space", "Complimentary Drinks", "City View"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThMKzonrXOUCtFwrLG-SO3NzYrQS1Sz-Ak8w&s"
    },
    {
        id: 12,
        name: "Cottage Room",
        price: "$180 per night",
        rating: 4.6,
        features: ["Free Wi-Fi", "Private Garden", "Fireplace", "Countryside View"],
        image: "https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg-room.jpg"
    },
    {
        id: 13,
        name: "Luxury Villa",
        price: "$600 per night",
        rating: 5.0,
        features: ["Private Pool", "Butler Service", "Oceanfront", "Private Garden"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiv83mZD2PrQlzuxG3raoTIjr3TknSiU1vLg&s"
    },
    {
        id: 14,
        name: "Loft Room",
        price: "$140 per night",
        rating: 4.3,
        features: ["Free Wi-Fi", "High Ceiling", "City View", "Modern Design"],
        image: "https://img.freepik.com/premium-photo/hotel-room-with-bed-lamp-chandelier_865967-1293795.jpg"
    },
    {
        id: 15,
        name: "Studio Apartment",
        price: "$100 per night",
        rating: 4.0,
        features: ["Free Wi-Fi", "Kitchenette", "City View", "Modern Amenities"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5GdDnJMXGPKREBN7uyb3Y3TX7s6vk9BBxA&s"
    },
    {
        id: 16,
        name: "Heritage Room",
        price: "$250 per night",
        rating: 4.7,
        features: ["Free Wi-Fi", "Antique Furniture", "Garden View", "Colonial Decor"],
        image: "https://oberoi-hotel-new-delhi.booked.net/data/Photos/OriginalPhoto/8886/888621/888621127/The-Oberoi-New-Delhi-Hotel-Exterior.JPEG"
    },
    {
        id: 17,
        name: "Cabana Room",
        price: "$130 per night",
        rating: 4.4,
        features: ["Free Wi-Fi", "Beach Access", "Private Patio", "Tropical View"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrF0mYG2O7xYoXLDzhogrbl_TMvS8ooL3SAg&s"
    },
    {
        id: 18,
        name: "Superior Room",
        price: "$160 per night",
        rating: 4.6,
        features: ["Free Wi-Fi", "City View", "Mini Bar", "Luxurious Bedding"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFomsoTfwnWZIc_tXthw39_YCOcZ-Hm3GxLw&s"
    }
];

const Rooms = () => {
    return (
        <div className="rooms-container">
            {roomsData.map(room => (
                <div key={room.id} className="room-card">
                    <img src={room.image} alt={room.name} className="room-image" />
                    <h3 className="room-name">{room.name}</h3>
                    <p className="room-price">{room.price}</p>
                    <p className="room-rating">Rating: {room.rating}</p>
                    <ul className="room-features">
                        {room.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <button className="book-room-button">Book a Room</button>
                </div>
            ))}
        </div>
    );
};

export default Rooms;

