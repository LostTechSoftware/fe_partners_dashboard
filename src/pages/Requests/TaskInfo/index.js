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
      </section>

      <section className='itensList' >
        
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