import React from 'react';

import './styles.css';

const Message = (props) => {
  const avatar = sessionStorage.getItem('avatar');
  
  return (
    <div className="MessageElement">
      <div className="messageLine">
        <div className="messageBlock" id={'attendant'}>
          <section className="aboutThisMessage">
            <img 
              src={avatar}
              alt="profilePhoto"
              className="profilePhoto"
            />

            <span>
              <strong> USERNAME - </strong> 
              <time>{props.date} {props.time}</time> 
            </span>
          </section>

          <section className="arrowAlign">
            <div className="arrow" />
          </section>
          
          <section className="content">
            <p>{props.content}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Message;
