import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainSlide.scss';

const MainSlide = ({ navigate }) => {
  const slideData = [
    {
      id: 1,
      src: '/images/slide1.jpg',
      // buttonText: '아이유 팬 퀴즈 풀기',
    },
    {
      id: 2,
      src: '/images/slide2.jpg',
      // buttonText: '박효신 팬 퀴즈 풀기',
    },
    {
      id: 3,
      src: '/images/slide3.jpg',
      // buttonText: '나얼 팬 퀴즈 풀기',
    },
  ];

  const clickSlide = id => {
    navigate(`/promotion/${id}`);
  };

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    useTransform: false,
  };

  return (
    <div className="mainSlide">
      <Slider {...settings}>
        {slideData.map(image => (
          <div key={image.id} className="mainSlideContainer">
            <img
              className="img"
              src={image.src}
              alt="프로모션 배너"
              onClick={() => clickSlide(image.id)}
            />
            {/* <button
              className="slideButton"
              onClick={() => clickSlide(image.id)}
            >
              {image.buttonText}
            </button> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlide;
