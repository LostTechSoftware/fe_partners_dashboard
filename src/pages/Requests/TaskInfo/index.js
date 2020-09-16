import React from 'react';
import { CircularProgress, Button } from '@material-ui/core';

import Item from './Item' 

import phoneIcon from '../../../assets/phoneIcon.svg';
import './styles.css';

export default function TaskInfo() {
  return (
    <div className='taskInfo'>
      <main>
        <header>
          {/* change grafic circle here */}
          <CircularProgress variant="static" value={75} size={80} />
          <div className='text'>
            <h2 className='category'>New</h2>
            <div className='bottomText' >
              <span>Order execution starts automaticly</span>
              <span>Manager - <strong>Ana</strong> </span>
            </div>
          </div>
        </header>

        <section className='generalInfo' >
          <h2>Task info</h2>
          
          <div className='content'>
            <div className='sideLine' />
            <section className='preparingTime'>
              <span className='label'>Preparing time</span>
              <p className='result'>00:25m:30s</p>
            </section>

            <div className='sideLine' />
            <section className='address'>
              <span className='label'>Address</span>
              <p className='result'>Lincoln street 45</p>
            </section>

            <div className='sideLine' />
            <section className='contact'>
              <div>
                <span className='label'>Austin Paul</span>
                <p className='result'>+424 56778912</p>
              </div>

              <img src={ phoneIcon } alt='phone'/>
            </section>

            <div className='sideLine' />
          </div>
        </section>

        <section className='itensList' >
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />

        </section>
      </main>

      <footer>
        <h2 className='finalPrice'> €99,60 </h2>
        <Button onClick={console.log('request accepted')}>
          Accept order
        </Button>
      </footer>
    </div>
  );
}
