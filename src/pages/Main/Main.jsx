import MainSlide from './MainSlide/MainSlide';
import BestProduct from './BestProduct/BestProduct';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <MainSlide />
      <div className="bestProductText">What's Hot</div>
      <BestProduct />
    </div>
  );
};

export default Main;
