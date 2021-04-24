import React, { useState } from "react";

import "./styles.css";

const Message = (props) => {
  const restaurantName = sessionStorage.getItem("restaurantName");
  const sendBy = restaurantName === props.userName ? "attendant" : "client";

  return (
    <div className="MessageElement">
      <div className="messageLine">
        <div className="messageBlock" id={sendBy}>
          <section className="aboutThisMessage">
            <img
              src={props.avatar}
              alt="profilePhoto"
              className="profilePhoto"
            />

            <span>
              <strong> {props.userName} </strong>
            </span>
          </section>

          <section className="arrowAlign">
            <div className="arrow" />
          </section>

          <section className="content">
            <p> {props.children} </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Message;
