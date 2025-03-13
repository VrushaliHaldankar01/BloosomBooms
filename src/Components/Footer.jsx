import React from 'react';
import Logo from '../Assets/Logo.svg';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-section-one'>
        <div className='footer-logo-container'>
          <h1>Blossom Blooms</h1>
        </div>
        <div className='footer-icons'>
          <a href='#'>
            <BsTwitter />
          </a>
          <a href='#'>
            <SiLinkedin />
          </a>
          <a href='#'>
            <BsYoutube />
          </a>
          <a href='#'>
            <FaFacebookF />
          </a>
        </div>
      </div>
      <div className='footer-section-two'>
        <div className='footer-section-columns'>
          <h4>About Us</h4>
          <span>Help</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className='footer-section-columns'>
          <h4>Contact Us</h4>
          <span>244-5333-7783</span>
          <span>blossombooms@food.com</span>
        </div>
        <div className='footer-section-columns'>
          <h4>Legal</h4>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
