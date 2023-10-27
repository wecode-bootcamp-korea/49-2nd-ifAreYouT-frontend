import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainSlide.scss';

const MainSlide = ({ navigate }) => {
  const slideData = [
    {
      id: 1,
      src: '/images/slide-6.jpeg',
    },
    {
      id: 2,
      src: '/images/slide-2.jpg',
    },
    {
      id: 3,
      src: '/images/slide-3.png',
    },
    {
      id: 4,
      src: '/images/slide-4.webp',
    },
  ];

  const clickSlide = id => {
    navigate(`/promotion/${id}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplay: 10,
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlide;
