import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import PaymentHeader from './PaymentHeader/PaymentHeader';
import PaymentMain from './PaymentMain/PaymentMain';
import PaymentFooter from './PaymentFooter/PaymentFooter';
import './Payment.scss';

const Payment = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const { state } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const orderNumber = searchParams.get('orderNumber');

  useEffect(() => {
    if (!state || !token) {
      navigate('/');
    }
  }, []);

  return (
    <div className="payment">
      <div className="paymentContainer">
        <PaymentHeader />
        <PaymentMain state={state} orderNumber={orderNumber} />
        <PaymentFooter />
      </div>
    </div>
  );
};

export default Payment;
