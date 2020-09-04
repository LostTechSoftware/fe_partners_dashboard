import React from 'react';
import { Link } from 'react-router-dom';


import './styles.css';

export default function MainMenu({ currentPage }) {
  
  function isTheCurrentPage(page){
    if(page === currentPage)
      return 'onPage';
    else
      return null;
  }

  return (
    <div className='mainMenu'>
      <img
        src='https://wp-portugal.com/wp-content/uploads/2017/09/React-icon.jpg'
        className='userIcon'
        alt='user icon'
      />

      <nav>
        <Link className={ isTheCurrentPage('requests') } to='/'>
          R
        </Link>
      </nav>

      <div />

    </div>
  );
}