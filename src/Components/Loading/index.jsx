import React from "react";
import "./index.css";
export const Loading = (props) => {
  return (
    <svg
    width={400}
    height={300}
    style={{
      left: "50%",
      top: "50%",
      position: "absolute",
      transform: "translate(-50%,-50%) matrix(1,0,0,1,0,0)",
    }}
    viewBox="0 0 187.3 93.7"
    {...props}
  >
    <path
      fill="none"
      stroke="#4E4FEB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M93.9 46.4c9.3 9.5 13.8 17.9 23.5 17.9s17.5-7.8 17.5-17.5-7.8-17.6-17.5-17.5c-9.7.1-13.3 7.2-22.1 17.1-8.9 8.8-15.7 17.9-25.4 17.9s-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5 16.3 9.3 24 17.1z"
      id="outline"
    />
    <path
      fill="none"
      stroke="#4E4FEB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M93.9 46.4c9.3 9.5 13.8 17.9 23.5 17.9s17.5-7.8 17.5-17.5-7.8-17.6-17.5-17.5c-9.7.1-13.3 7.2-22.1 17.1-8.9 8.8-15.7 17.9-25.4 17.9s-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5 16.3 9.3 24 17.1z"
      opacity={0.05}
      id="outline-bg"
    />
  </svg>
  );
};
