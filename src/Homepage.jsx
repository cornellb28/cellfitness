import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Child Care</div>
          <span className='subtitle'>Check Schedule </span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Performance Training</div>
          <span className='subtitle'>Learn More</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Appointments</div>
          <span className='subtitle'>Book Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Classes</div>
          <span className='subtitle'>See Schedule</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Contact</div>
          <span className='subtitle'>Questions?</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;