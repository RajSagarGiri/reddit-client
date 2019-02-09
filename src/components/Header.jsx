import React from 'react';
import '../styles/header.css';

const Header =  (props) => 
   <div className='head'>
    <a  href='/' onClick={props.home}>
    <img src='header.png' alt='Reddit' />
    </a>
    <form onSubmit={props.action}>
        <input type='text' id ='xyz' name='key' placeholder='Search Reddit' autoComplete='off'/>
        <button>Go</button>
    </form>
        </div>



export default Header;
