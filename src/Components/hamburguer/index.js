import React from "react";
import "./style.css";

export const Hamburguer = ({ isActive }) => {
  return (
    <>
      <button
        className={`hamburger hamburger--spin ${isActive && "is-active"}`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </>
  );
};
