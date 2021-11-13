import * as React from "react";

function CommentIcon(props) {
  return (
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill={props.color}>
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
        
      transform="translate(-0.998 2.5)"
      />
    </svg>
  );
}

export default CommentIcon