import React from 'react';
import '../styles/header.css';

const Header =  (props) => 
   <div className='head'>
    <img src='header.png' alt='Reddit' />
    <form onSubmit={props.action}>
        <input type='text'/>
    </form>
    </div>
export default Header;



