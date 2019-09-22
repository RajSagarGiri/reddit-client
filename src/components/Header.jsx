import React from 'react';
import Select from 'react-select';
import '../styles/header.css';

const Header = ({ handleChange, options }) => (
  <div className='head'>
    <a href='/reddit-client'>
      <img src='header.png' alt='Reddit' />
    </a>
    <Select
      onChange={handleChange}
      options={options}
      defaultValue={options[0]}
      className='select'
    />
  </div>
);

export default Header;
