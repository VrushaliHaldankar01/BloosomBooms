import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='container mt-3'>
      <h1 className='text-center'>Have a Question In Mind?</h1>
      <h2 className='text-center mb-4'>Let Us Help You</h2>
      <form onSubmit={handleSubmit} className='w-50 mx-auto'>
        <div className='form-group mb-3'>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your name'
            required
          />
        </div>
        <div className='form-group mb-3'>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='form-group mb-4'>
          <label htmlFor='message'>Your Message</label>
          <textarea
            className='form-control'
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Enter your message'
            rows='4'
            required
          />
        </div>
        <button type='submit' className='btn-submit w-100'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
