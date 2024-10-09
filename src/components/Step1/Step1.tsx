import React from 'react';
import './Step1.scss';

const Step1: React.FC = () => {
  return (
    <div className="step1-container">
      <h2 className="step1-title">Personal info</h2>
      <p className="step1-description">Please provide your name, email address, and phone number.</p>
      
      <form className="step1-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="e.g. Stephen King" />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="e.g. stephenking@lorem.com" />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="e.g. +1 234 567 890" />
        </div>
        
        <button type="submit" className="next-step-btn">Next Step</button>
      </form>
    </div>
  );
};

export default Step1;
