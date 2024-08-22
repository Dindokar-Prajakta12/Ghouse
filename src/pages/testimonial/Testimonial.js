import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
    {
        image: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724198400&semt=ais_hybrid',
        name: 'John Doe',
        review: 'The service was fantastic! Highly recommended.',
    },
    {
        image: 'https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=',
        name: 'Jane Smith',
        review: 'A wonderful experience from start to finish.',
    },
    {
        image: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
        name: 'Alice Johnson',
        review: 'Lovely stay, very comfortable and welcoming.',
    },
    {
        image: 'https://media.istockphoto.com/id/517234226/photo/i-see-no-good-reason-to-act-my-age.jpg?s=612x612&w=0&k=20&c=qx2j21ZtwPWJuvrLD8uvegXz9z4YSQQnflUyGlBkyic=',
        name: 'Alice Johnson',
        review: 'Lovely stay, very comfortable and welcoming.',
    },
    {
        image: 'https://www.shutterstock.com/image-photo/portrait-happy-retired-senior-man-260nw-1989220907.jpg',
        name: 'Alice Johnson',
        review: 'Lovely stay, very comfortable and welcoming.',
    },
    {
        image: 'https://img.freepik.com/free-photo/handsome-man-posing-studio_176420-28973.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723939200&semt=ais_hybrid',
        name: 'Alice Johnson',
        review: 'Lovely stay, very comfortable and welcoming.',
    },
    {
        image: 'https://img.freepik.com/premium-photo/young-caucasian-man-isolated-blue-background-showing-number-two-with-fingers_1187-197190.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722038400&semt=ais_user',
        name: 'Alice Johnson',
        review: 'Lovely stay, very comfortable and welcoming.',
    },
    
];

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display 3 items at once
        slidesToScroll: 1, // Scroll 1 item at a time
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };    
    return (
       <>
        <div className='back'>
        <div className="somee">
            <h1>REVIEWS..</h1> 
            <p>Our Happy Customer</p>
        </div>
        <div className="reviews-slider-container">
            <Slider {...settings}>
                {TestimonialData.map((review, index) => (
                    <div key={index} className="review-card">
                        <img
                            src={review.image}
                            alt={review.name}
                            className="review-image"
                        />
                        <h3 className="review-name">{review.name}</h3>
                        <p className="review-text">"{review.review}"</p>
                    </div>
                ))}
            </Slider>
        </div>
        </div>
       </>
    );
};

export default Testimonial;
