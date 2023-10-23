import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import OrderHeader from './OrderHeader/OrderHeader';
import OrderMain from './OrderMain/OrderMain';
import OrderFooter from './OrderFooter/OrderFooter';
import { HOST, productInfo } from '../../utils/variable';
import './Order.scss';

const Order = () => {
  const [seatData, setSeatData] = useState([]);
  const grade = useRef();
  const { current } = grade;
  const mockLocation = productInfo;

  useEffect(() => {
    axios
      .get(`${HOST}/orders/seats?eventId=1`, {
        headers: {
          'Content-Type': 'application/json',
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MX0sImlhdCI6MTY5NzcxOTUyNSwiZXhwIjoxNzAwMzExNTI1fQ.pPTp9onzdmC6UUlnGxGjFfIXINJeZU5eg57mzyxBhs8',
        },
      })
      .then(res => {
        const { seats, detail } = res.data.data;
        grade.current = detail;
        setSeatData(seats);
      })
      .catch(err => {});
  }, []);

  if (seatData.length === 0) {
    return null;
  }
  return (
    <div className="order">
      <div className="orderContainer">
        <OrderHeader detail={current} mockLocation={mockLocation} />
        <OrderMain
          seatData={seatData}
          setSeatData={setSeatData}
          detail={current}
          mockLocation={mockLocation}
        />
        <OrderFooter />
      </div>
    </div>
  );
};

export default Order;
