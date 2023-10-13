import { useState, useEffect } from 'react';
import { seatMockData } from '../../components/Variable';
import './Order.scss';

const Order = () => {
  const [seatData, setSeatData] = useState([]);
  useEffect(() => {
    setSeatData(seatMockData.seats);
  }, []);

  if (seatData.length === 0) {
    return null;
  }

  return (
    <div className="order">
      <div className="orderContainer">
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </div>
    </div>
  );
};

export default Order;
