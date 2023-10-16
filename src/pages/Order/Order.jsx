import { useState, useEffect } from 'react';
import OrderHeader from '../../components/Order/OrderHeader/OrderHeader';
import OrderMain from '../../components/Order/OrderMain/OrderMain';
import OrderFooter from '../../components/Order/OrderFooter/OrderFooter';
import { seatMockData } from '../../components/Variable';
import './Order.scss';

const Order = () => {
  const [seatData, setSeatData] = useState([]);
  const [selected, setSelected] = useState(Array(600).fill(false));

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
        <OrderMain
          seatData={seatData}
          selected={selected}
          setSelected={setSelected}
        />
        <OrderFooter />
      </div>
    </div>
  );
};

export default Order;
