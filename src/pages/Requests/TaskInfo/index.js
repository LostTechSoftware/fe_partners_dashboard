import React from 'react';

import './styles.css';

export default function TaskInfo() {
  return (
    <div className='taskInfo'>
      <header>
        {/* put grafic circle here */}
        <div className='text'>
          <p>New</p>
          <div className='bottomText' >
            <p>Order execution starts automaticly</p>
            <p>Manager - <strong>Ana</strong> </p>
          </div>
        </div>
      </header>
      <section className='generalInfo' >

      </section>

      <section className='itensList' >

      </section>
    </div>
  );
}