import React from 'react';

const LeftArrow = (props) => (
  <div className="nextArrow" onClick={props.previousSlide}>
    &larr;
  </div>
);

export default LeftArrow;