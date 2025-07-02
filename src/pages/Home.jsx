import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import banner from '../assets/banner.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import { Link } from 'react-router-dom';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,               // transition speed
    fade: true,               // smooth fade transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,      // ✅ 3 seconds per slide
    arrows: false
  };

  return (
    <div className="home">
      <Slider {...settings} className="banner-slider">
        <img src={banner} alt="Banner 1" className="banner-image" />
        <img src={banner2} alt="Banner 2" className="banner-image" />
        <img src={banner3} alt="Banner 3" className="banner-image" />
      </Slider>

      <div className="home-content">
        <h1 className="fade-in">Welcome to Palnadu Natural Spices 🌶️</h1>
        <p className="fade-in">Pure, natural, and direct from Palnadu farmers.</p>
        <Link to="/products" className="shop-button glow">Shop Now</Link>
      </div>
    </div>
  );
}

export default Home;
