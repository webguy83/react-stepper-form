import React from 'react';
import './Header.scss';

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className='form-header'>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

export default Header;
