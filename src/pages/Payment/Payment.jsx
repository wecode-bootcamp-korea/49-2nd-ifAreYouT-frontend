import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentHeader from './PaymentHeader/PaymentHeader';
import PaymentMain from './PaymentMain/PaymentMain';
import PaymentFooter from './PaymentFooter/PaymentFooter';
import './Payment.scss';

const Payment = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { state } = useLocation();

  useEffect(() => {
    if (!state || !token) {
      navigate('/');
    }
  }, []);

  if (!state || !token) return null;

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
