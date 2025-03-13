import React from 'react';
import BrowseFlowers from '../Assets/browse-flower.jpg';
import ChooseBouquet from '../Assets/boquet.jpg';
import FastDelivery from '../Assets/delivery-image.jpg';

const Work = () => {
  const workInfoData = [
    {
      image: BrowseFlowers,
      title: 'Browse Our Floral Collection',
      text: 'Explore our extensive range of beautiful flowers and bouquets, perfect for any occasion. From roses to lilies, we have something to brighten your day.',
    },
    {
      image: ChooseBouquet,
      title: 'Customize Your Bouquet',
      text: 'Select your preferred flowers and customize your bouquet to suit your style. Whether it’s for a special event or a gift, create something truly unique.',
    },
    {
      image: FastDelivery,
      title: 'Fast and Reliable Delivery',
      text: 'Enjoy swift and secure delivery right to your doorstep. Our team ensures your flowers arrive fresh and on time, making every moment special.',
    },
  ];

  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <h1 className='primary-heading'>How It Works</h1>
        <p className='primary-text'>
          Discover how Blossom Blooms makes flower shopping a delightful and
          convenient experience. Our process is simple, ensuring you get the
          freshest flowers with ease.
        </p>
      </div>
      <div className='work-section-bottom'>
        {workInfoData.map((data) => (
          <div className='work-section-info' key={data.title}>
            <div className='info-boxes-img-container'>
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
