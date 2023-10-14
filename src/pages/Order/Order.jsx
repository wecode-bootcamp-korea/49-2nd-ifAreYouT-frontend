import { useState, useEffect } from 'react';
import { seatMockData } from '../../components/Variable';
import './Order.scss';

const Order = () => {
  const [seatData, setSeatData] = useState([]);
  const [concertHall, setConcertHall] = useState({});
  const [isSelected, setIsSelected] = useState(Array(600).fill(false));

  useEffect(() => {
    setSeatData(seatMockData.seats);
    setConcertHall(seatMockData.concertHall);
  }, []);

  const handleClick = idx => {
    const buttonState = [...isSelected];
    buttonState[idx] = !buttonState[idx];
    setIsSelected(buttonState);
  };

  const selectedSeat = (() => {
    const chooseSeat = [];
    isSelected.forEach((val, idx) => {
      if (val) {
        chooseSeat.push(idx);
      }
    });
    return chooseSeat;
  })(isSelected);

  const totalPrice = selectedSeat
    .reduce((acc, cur) => acc + Number(seatData[cur].seatGrade.price), 0)
    .toLocaleString();

  if (seatData.length === 0) {
    return null;
  }

  return (
    <div className="order">
      <div className="orderContainer">
        <div className="orderHeader">주문/좌석 선택</div>
        <div className="productInfo">장소 : 테헤란로</div>
        <div className="gradeInfo" />
        <div className="concertHall">
          <div className="stage">
            <div className="text">STAGE</div>
          </div>
          <div className="seatTable">
            <div />
            <div className="seatColumn">
              {Array(concertHall.column)
                .fill(1)
                .map((val, idx) => {
                  return (
                    <div className="column" key={idx}>
                      {val + idx}
                    </div>
                  );
                })}
            </div>
            <div className="seatRow">
              {Array(concertHall.row)
                .fill(1)
                .map((val, idx) => {
                  return (
                    <div className="row" key={idx}>
                      {String.fromCharCode(val + idx + 64)}
                    </div>
                  );
                })}
            </div>
            <div className="seatList">
              {seatData.map((seatInfo, idx) => {
                const { seatId, status, seatGrade } = seatInfo;
                const { grade } = seatGrade;
                const selectColor = isSelected[idx]
                  ? 'selected'
                  : `grade${grade}`;
                const buttonColor = status ? selectColor : 'reserved';

                return (
                  <input
                    className={`seat ${buttonColor}`}
                    key={seatId}
                    type="Button"
                    onClick={() => handleClick(idx)}
                    disabled={!status}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="selectSeatInfo">
          <div className="selectSeatList">
            {selectedSeat.map(val => {
              return (
                <div className="selectSeat" key={val}>
                  {seatData[val].name} :{' '}
                  {seatData[val].seatGrade.price.toLocaleString()}원
                </div>
              );
            })}
          </div>
          <div className="totalPrice">총금액 : {totalPrice}원</div>
          <div className="goToPayment">
            <button className="goToPaymentButton">결제하러가기</button>
          </div>
        </div>
        <div className="orderFooter">주문 / 좌석 선택</div>
        <div className="orderFooter">결제 단계</div>
      </div>
    </div>
  );
};

export default Order;
