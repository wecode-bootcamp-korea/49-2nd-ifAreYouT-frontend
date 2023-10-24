import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MainSlide from './MainSlide/MainSlide';
import BestProduct from './BestProduct/BestProduct';
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();
  const [promotions, setPromotions] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      // .get('/data/newData.json')
      .get('http://10.58.52.221:8000/events/main')
      .then(response => {
        setPromotions(response.data.data.promotions);
        setEvents(response.data.data.events);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, []);

  return (
    <div className="main">
      <MainSlide promotions={promotions} navigate={navigate} />
      <div className="bestProductText">What's Hot</div>
      <BestProduct events={events} navigate={navigate} />
    </div>
  );
};

export default Main;
