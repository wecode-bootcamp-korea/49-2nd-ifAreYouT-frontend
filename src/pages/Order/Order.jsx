import { useState, useEffect } from 'react';
import OrderHeader from './OrderHeader/OrderHeader';
import OrderMain from './OrderMain/OrderMain';
import OrderFooter from './OrderFooter/OrderFooter';
import { seatMockData } from '../../components/variable';
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
        <OrderHeader seatData={seatData} />
        <OrderMain seatData={seatData} setSeatData={setSeatData} />
        <OrderFooter />
      </div>
    </div>
  );
};

export default Order;
