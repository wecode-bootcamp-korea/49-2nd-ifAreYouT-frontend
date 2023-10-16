import { useNavigate } from 'react-router-dom';
import SeatTable from './SeatTable/SeatTable';
import SelectedSeatList from './SelectedSeatList/SelectedSeatList';
import './OrderMain.scss';

const OrderMain = ({ seatData, selected, setSelected }) => {
  const navigate = useNavigate();
  const selectedSeat = (() => {
    const chooseSeat = [];
    selected.forEach((val, idx) => {
      if (val) {
        chooseSeat.push(idx);
      }
    });
    return chooseSeat;
  })(selected);
  const goToPaymentSelection = () => {
    navigate('/payment');
  };

  const totalPrice = selectedSeat
    .reduce((acc, cur) => acc + Number(seatData[cur].seatGrade.price), 0)
    .toLocaleString();

  return (
    <main className="OrderMain">
      <div className="concertHall">
        <div className="stage">
          <div className="text">STAGE</div>
        </div>
        <SeatTable
          seatData={seatData}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="selectSeatInfo">
        <div className="text">선택 좌석</div>
        <SelectedSeatList seatData={seatData} selected={selected} />
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
