import { useEffect } from 'react';
import MainSlide from './MainSlide/MainSlide';
import BestProduct from './BestProduct/BestProduct';
import './Main.scss';

const Main = () => {
  // 명세서처럼, events와 promotions 데이터를 한 번에 받아와서 여기서 보여주는 게 맞는지 확인 필요
  // 그렇다고 하면, 여기서 다 받아와서 props로 넘겨줘야 함

  // useEffect(() => {}, []);

  return (
    <div className="main">
      <MainSlide />
      <div className="bestProductText">What's Hot</div>
      <BestProduct />
    </div>
  );
};

export default Main;
