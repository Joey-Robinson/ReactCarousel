import React, { Component } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCount: 1
    }
  }
  nextSlide = () => {
    this.setState({slideCount: this.state.slideCount + 1});
  };
  previousSlide = () => {
    this.setState({slideCount: this.state.slideCount - 1});
  }
  render() {
    return (
      <div className="Slider">
        {this.state.slideCount === 1 ? <SlideOne /> : null}
        {this.state.slideCount === 2 ? <SlideTwo /> : null}
        {this.state.slideCount === 3 ? <SlideThree /> : null}
        <RightArrow nextSlide={this.nextSlide} />
        <LeftArrow previousSlide={this.previousSlide} />
      </div>
    );
  }
};

export default Slider;