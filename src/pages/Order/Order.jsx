import { useState, useEffect } from 'react';
import OrderHeader from './OrderHeader/OrderHeader';
import OrderMain from './OrderMain/OrderMain';
import OrderFooter from './OrderFooter/OrderFooter';
import { seatMockData, productInfo } from '../../components/variable';
import './Order.scss';

const Order = () => {
  const [seatData, setSeatData] = useState([]);
  const mockLocation = productInfo;

  useEffect(() => {
    setSeatData(seatMockData.seats);
  }, []);

  if (seatData.length === 0) {
    return null;
  }

  return (
    <div className="order">
      <div className="orderContainer">
        <OrderHeader seatData={seatData} mockLocation={mockLocation} />
        <OrderMain
          seatData={seatData}
          setSeatData={setSeatData}
          mockLocation={mockLocation}
        />
        <OrderFooter />
      </div>
    </div>
  );
};

export default Order;
