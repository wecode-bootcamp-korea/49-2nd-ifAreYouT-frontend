import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentMethod.scss';

const PaymentMethod = ({ selectedName, totalPrice, productName }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const selectPaymentMethod = e => {
    setPaymentMethod(e.target.value);
  };

  const backToOrder = () => {
    navigate('/order');
  };

  const IMP = window.IMP;
  IMP.init('');

  const handlePayment = async () => {
    if (paymentMethod.length === 0) {
      return alert('결제 방식을 선택해 주세요');
    }
    IMP.request_pay(
      {
        pg: paymentMethod,
        pay_method: paymentMethod,
        name: productName,
        amount: totalPrice,
        merchant_uid: 'ORD20231030-000131',
      },
      function (res) {
        const { success } = res;
        if (!success) {
          alert('결제가 취소 되었습니다.');
        } else if (success) {
          alert('결제가 완료 되었습니다.');
          navigate('/complete-payment');
        }
      },
    );
  };

  return (
    <div className="paymentMethod">
      <div className="seatPrice">
        <div className="selectedSeatsList">
          {selectedName.map(el => (
            <div className="selectedSeats" key={el}>
              {el}
            </div>
          ))}
        </div>
        <div className="totalPrice">총결제 금액 {totalPrice}원</div>
      </div>
      <div className="selectPaymentMethod">
        <div className="radioBUtton">
          <div>
            <input
              type="radio"
              name="paymentMethod"
              value="kakaopay"
              onClick={selectPaymentMethod}
            />
            카카오페이
          </div>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              value="tosspay"
              onClick={selectPaymentMethod}
            />
            토스페이
          </div>
          <div>
            <input
              type="radio"
              name="paymentMethod"
              value="payco"
              onClick={selectPaymentMethod}
            />
            페이코
          </div>
        </div>
        <div className="paymentTitle">결제방식 선택</div>
      </div>
      <div className="stepButton">
        <button className="backToOrder" onClick={backToOrder}>
          주문/좌석 선택 다시하기
        </button>
        <button className="payNow" onClick={handlePayment}>
          결제하기
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
