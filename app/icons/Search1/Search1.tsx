
import React from "react";

interface Props {
  className: any;
}

export const Search1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`search-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse className="ellipse" cx="11.4584" cy="11" rx="7.29167" ry="7" stroke="#33363F" strokeWidth="2" />
      <path className="path" d="M20.8333 20L17.7083 17" stroke="#33363F" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
};
