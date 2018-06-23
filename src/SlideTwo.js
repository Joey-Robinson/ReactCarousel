import React from 'react';

const SlideTwo = (props) => {
  let background = {
    backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc002.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return <div style={background} className="slide"></div>
}
export default SlideTwo;