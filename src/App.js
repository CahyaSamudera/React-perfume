import React, { useState } from 'react';
import Contact from './components/Contact/Contact';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Testimonial from './components/Testimonials/Testimonial';
import Product from './components/Product/Product';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Home />
        <About />
        <Banner />
        <Product />
        <Testimonial />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
