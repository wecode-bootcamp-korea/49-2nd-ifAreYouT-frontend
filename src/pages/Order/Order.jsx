import { useState, useEffect } from 'react';
import { seatMockData } from '../../components/Variable';
import './Order.scss';

const Order = () => {
  const [seatData, setSeatData] = useState([]);
  const [selected, setSelected] = useState(Array(600).fill(false));
  useEffect(() => {
    setSeatData(seatMockData.seats);
  }, []);

  const handleClick = idx => {
    const buttonState = [...selected];
    buttonState[idx] = !buttonState[idx];
    setSelected(buttonState);
  };

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
            <div>STAGE</div>
          </div>
          <div className="seatTable">
            <div />
            <div className="seatColumn">
              {Array(30)
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
              {Array(20)
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
                const selectColor = selected[idx] ? '#e50815' : '';

                return (
                  <input
                    className={`seat ${grade}`}
                    key={seatId}
                    type="Button"
                    onClick={() => handleClick(idx)}
                    style={{
                      backgroundColor: `${status ? selectColor : 'black'}`,
                    }}
                    disabled={!status}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="paymentInfo" />
        <div className="orderFooter">주문 / 좌석 선택</div>
        <div className="orderFooter">결제 단계</div>
      </div>
    </div>
  );
};

export default Order;
