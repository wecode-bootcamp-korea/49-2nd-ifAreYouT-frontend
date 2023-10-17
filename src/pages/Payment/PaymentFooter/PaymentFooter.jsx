import './PaymentFooter.scss';

const PaymentFooter = () => {
  return (
    <footer className="paymentFooter">
      <div className="orderStep step">주문 / 좌석 선택</div>
      <div className="step">〉</div>
      <div className="paymentSelection step">결제방식 선택 </div>
    </footer>
  );
};

export default PaymentFooter;
