import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import OrderHeader from './OrderHeader/OrderHeader';
import OrderMain from './OrderMain/OrderMain';
import OrderFooter from './OrderFooter/OrderFooter';
import { HOST } from '../../utils/variable';
import './Order.scss';

const Order = () => {
  const [seatData, setSeatData] = useState([]);
  const grade = useRef();
  const { state } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${HOST}/orders/seats?eventId=${id}`, {
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token'),
        },
      })
      .then(res => {
        const { seats, detail } = res.data.data;
        grade.current = detail;
        setSeatData(seats);
      })
      .catch(err => {});
  }, [id]);

  if (seatData.length === 0) {
    return null;
  }
  return (
    <div className="order">
      <div className="orderContainer">
        <OrderHeader detail={grade.current} state={state} />
        <OrderMain
          id={id}
          seatData={seatData}
          setSeatData={setSeatData}
          detail={grade.current}
          state={state}
        />
        <OrderFooter />
      </div>
    </div>
  );
};

export default Order;
