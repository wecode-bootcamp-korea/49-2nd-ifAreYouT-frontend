import { useNavigate } from 'react-router-dom';
import SeatTable from './SeatTable/SeatTable';
import SelectedSeatList from './SelectedSeatList/SelectedSeatList';
import './OrderMain.scss';

const OrderMain = ({ seatData, setSeatData }) => {
  const navigate = useNavigate();
  const selectedSeats = seatData
    .map((el, idx) => (el.status === 'selected' ? idx : null))
    .filter(el => el !== null);

  const selectedName = selectedSeats.map(el => seatData[el].name);
  const totalPrice = selectedSeats
    .reduce((acc, cur) => acc + Number(seatData[cur].seatGrade.price), 0)
    .toLocaleString();

  const goToPaymentSelection = () => {
    navigate('/payment', { state: { selectedName, totalPrice } });
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
        <SelectedSeatList seatData={seatData} />
        <div className="totalPrice">총금액 : {totalPrice}원</div>
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
