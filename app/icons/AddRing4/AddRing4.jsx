
import React from "react";

export const AddRing4 = ({ className }) => {
  return (
    <svg
      className={`add-ring-4 ${className}`}
      fill="none"
      height="15"
      viewBox="0 0 15 15"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse className="ellipse" cx="7.61102" cy="7.65284" rx="5.23078" ry="5.14112" stroke="black" strokeWidth="2" />
      <path
        className="path"
        d="M7.61096 9.36646L7.61096 5.93904"
        stroke="black"
        strokeLinecap="square"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M9.35461 7.65283L5.86743 7.65283"
        stroke="black"
        strokeLinecap="square"
        strokeWidth="2"
      />
    </svg>
  );
};
