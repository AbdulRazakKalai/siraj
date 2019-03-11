import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="1.jpg" />
        </div>
        <div>
          <img src="2.jpg" />
        </div>
        <div>
          <img src="3.jpg" />
        </div>
      </Carousel>
    );
  }
}
