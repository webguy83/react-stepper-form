import React from 'react';
import './Footer.scss';

interface FooterProps {
  onBack?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBack }) => {
  return (
    <footer className='form-footer'>
      {onBack && (
        <button type='button' className='go-back-btn' onClick={onBack}>
          Go Back
        </button>
      )}
      <button type='submit' className='next-step-btn'>
        Next Step
      </button>
    </footer>
  );
};

export default Footer;
