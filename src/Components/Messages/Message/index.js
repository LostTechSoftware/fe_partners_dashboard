import React from 'react';
import moment from 'moment'
import 'moment/locale/pt-br'

import './styles.css';

const Message = (props) => {
  return (
    <div className='MessageElement'>
      <div className='messageLine'>
        <div className='messageBlock' id={'attendant'}>
          <section className='aboutThisMessage'>
            <img 
              src={props.avatar}
              alt='profilePhoto'
              className='profilePhoto'
            />

            <span>
              <strong> { props.userName } </strong> 
            </span>
          </section>

          <section className='arrowAlign'>
            <div className='arrow' />
          </section>
          
          <section className='content'>
            <p>{props.children}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Message;
