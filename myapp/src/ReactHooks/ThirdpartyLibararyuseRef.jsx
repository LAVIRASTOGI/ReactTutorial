import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ThirdpartyLibararyuseRef() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div key={1} className="slider">
          <h3>1</h3>
        </div>
        <div key={2} className="slider">
          <h3>2</h3>
        </div>
        <div key={3} className="slider">
          <h3>3</h3>
        </div>
        <div key={4} className="slider">
          <h3>4</h3>
        </div>
        <div key={5} className="slider">
          <h3>5</h3>
        </div>
        <div key={6} className="slider">
          <h3>6</h3>
        </div>
      </Slider>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ThirdpartyLibararyuseRef;
