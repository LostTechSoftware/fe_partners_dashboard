import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Popover
} from '@material-ui/core';
import {
  RoomServiceRounded,
  MonetizationOnRounded,
} from '@material-ui/icons';

import ClipboardIcon from '../../assets/clipboardIcon';
import './styles.css';

export default function MainMenu({ currentPage }) {
  const [ modalOpen, setModalOpen ] = useState(null);

  const open = Boolean(modalOpen);

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

      <Button onClick={event => setModalOpen(event.currentTarget)}>
        aa
      </Button>
      <Popover
        open={open}
        anchorEl={modalOpen}
        onClose={event => setModalOpen(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        The content of the Popover.
      </Popover>
    </div>
  );
}
