import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Popover,
} from '@material-ui/core';
import {
  RoomServiceRounded,
  MonetizationOnRounded,
  ScheduleRounded,
  HelpRounded,
} from '@material-ui/icons';

import ClipboardIcon from '../../assets/clipboardIcon';
import RestaurantOpening from './RestaurantOpening';
import './styles.css';

export default function MainMenu({ currentPage }) {
  const [ modalOpen, setModalOpen ] = useState(null);
  const [ avatar, setAvatar ] = useState('');

  function isTheCurrentPage(page){
    if(page === currentPage)
      return 'onPage';
    else
      return null;
  }

  useEffect(() => {
    setAvatar(sessionStorage.getItem('avatar'));
  }, [])

  return (
    <div className='mainMenu'>
      <img
        src={ avatar === ''?
          'https://foodzilla.com.br/assets/images/favicon.png'
          :
          avatar
        }
        className='userIcon'
        alt='user icon'
      />

      <nav>
        <Link className={ isTheCurrentPage('requests') } to='/requests'>
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
      
      <section className='actions'>
        {/* help center button */}
        <a href='https://helpcenter.foodzilla.com.br'>
          <HelpRounded />
        </a>

        {/* modal button */}
        <Button
          className='button'
          fullWidth
          onClick={event => setModalOpen(event.currentTarget)}
        >
          <ScheduleRounded />
        </Button>
      </section>
      
      <Popover
        open={Boolean(modalOpen)}
        anchorEl={modalOpen}
        onClose={event => setModalOpen(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <RestaurantOpening />
      </Popover>
    </div>
  );
}
