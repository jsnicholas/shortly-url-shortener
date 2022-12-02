import React from "react";

function ShortLink(props) {
  return (
    <div className="linkBox">
      <h1>{props.response.original_link}</h1>
      <p>{props.response.short_link}</p>
    </div>
  );
}

export default ShortLink;
