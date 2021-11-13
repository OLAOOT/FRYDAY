import React from "react";

function HeartIcon(props) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12">
      <path d="M0,0H12V12H0Z" fill="none" />
      <path
        fill={props.color}
        d="M7.673,11.565a1,1,0,0,1-1.345-.005l-.055-.05C3.648,9.135,1.933,7.58,2,5.64a2.73,2.73,0,0,1,1.17-2.145A2.9,2.9,0,0,1,7,4.045a2.892,2.892,0,0,1,3.83-.55A2.73,2.73,0,0,1,12,5.64c.07,1.94-1.65,3.495-4.275,5.88l-.05.045Z"
        transform="translate(-0.998 -1.5)"
      />
    </svg>
  );
}

export default HeartIcon;
