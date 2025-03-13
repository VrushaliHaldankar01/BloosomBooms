import React from 'react';
import FlowerShopImage from '../Assets/team.jpg'; // Update this with your actual image path

const About = () => {
  return (
    <div className='about-section'>
      <div className='about-content'>
        <div className='about-image'>
          <img src={FlowerShopImage} alt='Blossom Blooms Team' />
        </div>
        <div className='about-text'>
          <h1>About Blossom Blooms</h1>
          <p>
            At Blossom Blooms, we believe that flowers are the perfect way to
            express emotions, celebrate special moments, and bring beauty into
            everyday life. Our story began with a passion for floral design and
            a commitment to providing the freshest, most vibrant flowers to our
            customers.
          </p>

          <p>
            Our team of experienced florists carefully handpick each flower,
            ensuring that every bouquet is crafted with love and attention to
            detail. We pride ourselves on offering personalized service, helping
            you find the perfect floral arrangement for any occasion.
          </p>
          <p>
            Visit our shop, explore our online store, or give us a call to
            discover how Blossom Blooms can bring a touch of nature's beauty
            into your life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
