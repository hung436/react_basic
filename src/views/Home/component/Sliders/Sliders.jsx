import React from "react";
import Slider from "react-slick";
import "./sliders.scss";
const AsNavFor = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider className="slider" {...settings}>
        <div className="slider__item">
          <img
            className="img-fluid"
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/25/637838421361404018_F-H1_800x300.png"
            alt=""
          />
        </div>
        <div className="slider__item">
          <img
            className="img-fluid"
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/2/637818433382779583_F-H1_800x300.png"
            alt=""
          />
        </div>
        <div className="slider__item">
          <img
            className="img-fluid"
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/26/637838801998065722_F-H1_800x300.png"
            alt=""
          />
        </div>
        <div className="slider__item">
          <img
            className="img-fluid"
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/23/637835943420559012_F-H1_800x300.png"
            alt=""
          />
        </div>
      </Slider>
    </>
  );
};

export default AsNavFor;
