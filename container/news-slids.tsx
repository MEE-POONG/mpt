import React, { Component } from "react";
import Slider from "react-slick";

export default class NewsSlider extends Component {
  render() {
    const settings = {
      className: "",
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div className=" text-center w-screen h-56">
        <h2 className="hidden"> Single Item</h2>
        <Slider {...settings} className="h-44 object-cover">
          <div>
            <img className="mx-auto" src="/images/banner.png" alt="" />
          </div>
          <div>
            <img className="mx-auto" src="/images/banner.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}