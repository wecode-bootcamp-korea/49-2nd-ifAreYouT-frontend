import { useLocation } from 'react-router-dom';
import PaymentHeader from './PaymentHeader/PaymentHeader';
import PaymentMain from './PaymentMain/PaymentMain';
import PaymentFooter from './PaymentFooter/PaymentFooter';
import './Payment.scss';

const Payment = () => {
  const { state } = useLocation();

  return (
    <div className="payment">
      <div className="paymentContainer">
        <PaymentHeader />
        <PaymentMain state={state} />
        <PaymentFooter />
      </div>
    </div>
  );
};

export default Payment;
