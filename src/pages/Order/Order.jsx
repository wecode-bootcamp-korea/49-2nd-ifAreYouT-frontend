import { useState, useEffect } from 'react';
import OrderHeader from '../../components/Order/OrderHeader/OrderHeader';
import OrderMain from '../../components/Order/OrderMain/OrderMain';
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

  const grade = [...new Set(seatData.map(val => val.seatGrade))];

  return (
    <div className="order">
      <div className="orderContainer">
        <OrderHeader grade={grade} />
        <OrderMain
          seatData={seatData}
          selected={selected}
          setSelected={setSelected}
        />
        <div className="orderFooter">주문 / 좌석 선택</div>
        <div className="orderFooter">결제 단계</div>
      </div>
    </div>
  );
};

export default Order;
