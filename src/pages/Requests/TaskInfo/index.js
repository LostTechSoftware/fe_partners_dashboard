import React from 'react';
import { CircularProgress, Button } from '@material-ui/core';

import Item from './Item' 
import './styles.css';

export default function TaskInfo() {
  return (
    <div className='taskInfo'>
      <header>
        {/* change grafic circle here */}
        <CircularProgress variant="static" value={75} size={80} />
        <div className='text'>
          <h2 className='category'>New</h2>
          <div className='bottomText' >
            <p>Order execution starts automaticly</p>
            <p>Manager - <strong>Ana</strong> </p>
          </div>
        </div>
      </header>

      <section className='generalInfo' >
        <h2>Task info</h2>
        
        <div className='content'>
          <div className='sideLine' />
          <section className='preparingTime'>
            <p className='label'>Preparing time</p>
            <p className='result'>00h:25m:30s</p>
          </section>

          <div className='sideLine' />
          <section className='address'>
            <p className='label'>Address</p>
            <p className='result'>Lincoln street 45</p>
          </section>

          <div className='sideLine' />
          <section className='contact'>
            <p className='label'>Austin Paul</p>
            <p className='result'>+424 56778912</p>
          </section>

          <div className='sideLine' />
        </div>
      </section>

      <section className='itensList' >
        <Item />
        <Item />
        <Item />
        <Item />
      </section>

      <footer>
        <h2 className='finalPrice'> €99,60 </h2>
        <Button onClick={console.log('request accepted')}>
          Accepted order
        </Button>
      </footer>
    </div>
  );
}
