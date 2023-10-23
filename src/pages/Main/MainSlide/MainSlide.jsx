import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainSlide.scss';

const MainSlide = () => {
  const navigate = useNavigate();
  const [mainSlideData, setMainSlideData] = useState([]);

  useEffect(() => {
    axios
      .get('/data/mainSlideData.json') //fetch에서 axios로 변경
      .then(response => {
        setMainSlideData(response.data);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, []);

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
        {mainSlideData.map(image => (
          <div key={image.id} className="mainSlideContainer">
            <img
              className="img"
              src={image.src}
              onClick={() => clickSlide(image.id)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlide;
