import React from "react";

export const TasksIcon = ({ color }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.25 2.94462L24.5 0.562272V0.80531L9.94165 2.51592L9.5 2.56781V3.0125V5V5.5H10H24.5V5.75H10H9.5V6.25V12.5V13H10H24.4877C24.3907 14.9539 23.7222 16.7469 22.499 18.3888C21.169 20.1742 19.4442 21.4818 17.3116 22.3494L17 22.4761V22.8125V24.5H8V22.8125V22.4768L7.68932 22.3497C5.56888 21.4823 3.83068 20.1617 2.5 18.3875C1.27813 16.7583 0.609261 14.9562 0.512314 13H3.75H4.25V12.5V2.94462ZM4.95025 3.10248L4.5 3.14751V3.6V5V5.5H5H6.25H6.75V5V3.475V2.92251L6.20025 2.97748L4.95025 3.10248ZM5 5.75H4.5V6.25V12.5V13H5H6.25H6.75V12.5V6.25V5.75H6.25H5ZM8.75 13H9.25V12.5V6.25V5.75H8.75H7.5H7V6.25V12.5V13H7.5H8.75ZM8.75 5.5H9.25V5V3.1875V2.64048L8.70518 2.68951L7.45518 2.80201L7 2.84298V3.3V5V5.5H7.5H8.75Z"
        stroke={color ? color : "black"}
        stroke-width="2"
      />
    </svg>
  );
};
