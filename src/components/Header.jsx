import React from 'react';
import '../styles/header.css';
import Select from 'react-select';

const Header = ({ handleChange, options }) => (
  <div className='head'>
    <a href='/'>
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
