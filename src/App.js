import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './container/navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Footer from './container/Footer/Footer';
import Gallery from './pages/gallery/Gallery';
import Testimonial from './pages/testimonial/Testimonial'
import Services from './pages/services/Services';
import Rooms from './pages/rooms/Rooms';

function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/rooms" element={<Rooms />} /> */}
                <Route path='/rooms' element={<Rooms/>}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/testimonial" element={<Testimonial/>}/>
                <Route path="/services" element={<Services/>}/>


          </Routes>
          <Footer/>
      </Router>

</>
  );
}

export default App;


