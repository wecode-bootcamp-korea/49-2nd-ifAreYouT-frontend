import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainSlide.scss';

const MainSlide = ({ promotions, navigate }) => {
  const [mainSlideData, setMainSlideData] = useState(promotions);

  useEffect(() => {
    setMainSlideData(promotions);
  }, [promotions]);

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
      {mainSlideData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <Slider {...settings}>
          {mainSlideData.map(image => (
            <div key={image.id} className="mainSlideContainer">
              <img
                className="img"
                src={image.src}
                alt="프로모션 배너"
                onClick={() => clickSlide(image.id)}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default MainSlide;
