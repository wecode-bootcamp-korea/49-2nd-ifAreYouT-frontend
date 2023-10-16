import './OrderFooter.scss';

const OrderFooter = () => {
  return (
    <footer className="orderFooter">
      <div className="orderStep step">주문 / 좌석 선택</div>
      <div className="step">〉</div>
      <div className="paymentSelection step">결제방식 선택 </div>
    </footer>
  );
};

export default OrderFooter;
