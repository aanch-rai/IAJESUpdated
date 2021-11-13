import React from "react";
import "./styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";





export const SlideViewProjects= ()=> {

  const slidesData = [
    {
      id: 1,
      title: 'repellendus id ullam',
      label: 'Dolorem officiis temporibus.'
    }, {
      id: 2,
      title: 'excepturi consequatur est',
      label: 'Officia non provident dolor esse et neque.'
    }, {
      id: 3,
      title: 'eius doloribus blanditiis',
      label: 'Ut recusandae vel vitae molestiae id soluta.'
    }, {
      id: 4,
      title: 'nihil voluptates delectus',
      label: 'Qui vel consequatur recusandae illo repellendus.'
    }, {
      id: 5,
      title: 'nemo dolorem necessitatibus',
      label: 'Placeat odit velit itaque voluptatem.'
    }, {
      id: 6,
      title: 'dolorem quibusdam quasi',
      label: 'Adipisci officiis repudiandae.'
    },
  ];






  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    )

  };

return (
  <div >
    <Slider {...settings}
      className = 'slider'
    >
      {slidesData.map((slide) =>

<div className="slick-slide" key={slide.id}>
  <h2 className="slick-slide-title">{slide.title}</h2>
  <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
  <label className="slick-slide-label">{slide.label}</label>
</div>

)}
    </Slider>
  </div>
);
  }