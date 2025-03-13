import React from 'react';
import { Link } from 'react-router-dom';
import rosesImage from '../Assets/roses.jpg';
import tulipImage from '../Assets/tulip.jpg';
import irisImage from '../Assets/iris.jpg';
// import './Homepage.css'; // Import the CSS for styling

const Home = () => {
  return (
    <div className='home-page'>
      <header className='hero-section'>
        <div className='hero-content'>
          <h1>Welcome to Blossom Blooms</h1>
          <p>Your one-stop shop for beautiful flowers and arrangements.</p>
          <Link to='/shop' className='shop-now-button'>
            Shop Now
          </Link>
        </div>
      </header>
      <section className='featured-flowers'>
        <h2>Featured Flowers</h2>
        <div className='flower-grid'>
          {/* Example Flower Card */}
          <div className='flower-card'>
            <img src={rosesImage} alt='Flower Background'></img>

            <h3>Elegant Roses</h3>
            <p>$29.99</p>
          </div>
          <div className='flower-card'>
            <img src={tulipImage} alt='Tulip' />
            <h3>Bright Tulips</h3>
            <p>$19.99</p>
          </div>
          <div className='flower-card'>
            <img src={irisImage} alt='Tulip' />
            <h3>Bright Tulips</h3>
            <p>$19.99</p>
          </div>
        </div>
      </section>
      <section className='promotions'>
        <h2>Special Promotions</h2>
        <div className='promotion-details'>
          <h3>Summer Sale!</h3>
          <p>
            Get 20% off on all flower arrangements this summer. Limited time
            offer!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
