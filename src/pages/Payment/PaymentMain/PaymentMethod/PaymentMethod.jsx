import PaymentModal from './PaymentModal/PaymentModal';
import './PaymentMethod.scss';
import { useState } from 'react';

const PaymentMethod = ({ selectedName, totalPrice }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCLoseModal = () => {
    setOpenModal(false);
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
      <div className="selectPaymentMethod" />
      <div className="stepButton">
        <button className="backToOrder">주문/좌석 선택 다시하기</button>
        <button onClick={handleOpenModal}>결제하기</button>
        <PaymentModal
          openModal={openModal}
          handleCLoseModal={handleCLoseModal}
        />
      </div>
    </div>
  );
};

export default PaymentMethod;
