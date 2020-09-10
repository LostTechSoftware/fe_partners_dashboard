import React from 'react';
import { Link } from 'react-router-dom';
import {
  RoomServiceRounded,
  DonutSmallRounded,
  ViewCarouselRounded,
  MonetizationOnRounded,
  LockOpenRounded,
} from '@material-ui/icons';

import ClipboardIcon from '../../assets/clipboardIcon';
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
          <ClipboardIcon />
        </Link>

        <Link className={ isTheCurrentPage('otherPage') } to='/'>
          <RoomServiceRounded />
        </Link>

        <Link className={ isTheCurrentPage('otherPage') } to='/'>
          <DonutSmallRounded />
        </Link>

        <Link className={ isTheCurrentPage('otherPage') } to='/'>
          <MonetizationOnRounded />
        </Link>

        <Link className={ isTheCurrentPage('otherPage') } to='/'>
          <ViewCarouselRounded />
        </Link>

        <Link className={ isTheCurrentPage('otherPage') } to='/'>
          <LockOpenRounded />
        </Link>
      </nav>

      <div />
    </div>
  );
}