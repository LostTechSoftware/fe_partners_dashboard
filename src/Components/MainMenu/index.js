import React from 'react';
import { Link } from 'react-router-dom';
import {
  RoomServiceRounded,
  DonutSmallRounded,
  MonetizationOnRounded,
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
        src='https://foodzilla.com.br/assets/images/favicon.png'
        className='userIcon'
        alt='user icon'
      />

      <nav>
        <Link className={ isTheCurrentPage('requests') } to='/'>
          <ClipboardIcon />
        </Link>

        <Link className={ isTheCurrentPage('foodMenu') } to='/menu'>
          <RoomServiceRounded/>
        </Link>

        {/* [] use this route after graph building */}
        {/* <Link className={ isTheCurrentPage('otherPage') } to='/'>
          <DonutSmallRounded />
        </Link> */}

        <Link className={ isTheCurrentPage('money') } to='/money'>
          <MonetizationOnRounded />
        </Link>
      </nav>

      {/* dinamyc bottom margin div */}
      <div />
    </div>
  );
}
