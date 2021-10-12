import React, { useState } from "react";
import dataSlider from "./dataSlider";
import "./Slider.css";
import BtnSlider from "./BtnSlider";

export default function Slider(props) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
      setSlideIndex(slideIndex + 1 )
    }else if ( slideIndex === dataSlider.length){
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex -1)
    } else if(slideIndex === 1){
      setSlideIndex(dataSlider.length)
    }
  };
  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        console.log(index + 1, slideIndex);
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img alt ='' className=" mx-auto d-flex rounded mb-3 mb-lg-0" src={process.env.PUBLIC_URL + `/imgs/${props.name}${index + 1}.png`} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
}
