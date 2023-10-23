import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SeatTable from './SeatTable/SeatTable';
import SelectedSeatList from './SelectedSeatList/SelectedSeatList';
import './OrderMain.scss';
import { HOST } from '../../../utils/variable';

const OrderMain = ({ seatData, setSeatData, detail, mockLocation }) => {
  const navigate = useNavigate();
  const selectedSeats = seatData
    .map((el, idx) => (el.status === 'selected' ? idx : null))
    .filter(el => el !== null);
  const seats = selectedSeats.map(el => {
    return { seatId: el + 1 };
  });

  const selectedName = selectedSeats.map(el => seatData[el].name);
  const totalPrice = selectedSeats.reduce(
    (acc, cur) =>
      acc +
      Number(detail.filter(el => el.grade === seatData[cur].grade)[0].price),
    0,
  );

  const goToPaymentSelection = () => {
    axios.patch(
      `${HOST}/orders/seats?eventId=1`,
      {
        timeId: 1,
        seats,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MX0sImlhdCI6MTY5NzcxOTUyNSwiZXhwIjoxNzAwMzExNTI1fQ.pPTp9onzdmC6UUlnGxGjFfIXINJeZU5eg57mzyxBhs8',
        },
      },
    );
    navigate('/payment', { state: { mockLocation, selectedName, totalPrice } });
  };

  return (
    <main className="OrderMain">
      <div className="concertHall">
        <div className="stage">
          <div className="text">STAGE</div>
        </div>
        <SeatTable seatData={seatData} setSeatData={setSeatData} />
      </div>
      <div className="selectSeatInfo">
        <div className="text">선택 좌석</div>
        <SelectedSeatList seatData={seatData} detail={detail} />
        <div className="totalPrice">
          총금액 : {totalPrice.toLocaleString()}원
        </div>
        <div className="goToPayment">
          <button className="goToPaymentButton" onClick={goToPaymentSelection}>
            결제방식 선택
          </button>
        </div>
      </div>
    </main>
  );
};

export default OrderMain;
