import React from 'react';

const RightArrow = (props) => (
  <div className="nextArrow" onClick={props.nextSlide}>
    &rarr;
  </div>
);

export default RightArrow;