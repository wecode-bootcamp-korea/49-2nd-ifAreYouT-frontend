import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MainSlide from './MainSlide/MainSlide';
import BestProduct from './BestProduct/BestProduct';
import { HOST } from '../../utils/variable';
import './Main.scss';

const Main = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${HOST}/events/main`)
      .then(response => {
        setEvents(response.data.data.events);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, []);

  return (
    <div className="main">
      <MainSlide navigate={navigate} />
      <div className="bestProductText">What's Hot</div>
      <BestProduct events={events} navigate={navigate} />
    </div>
  );
};

export default Main;
