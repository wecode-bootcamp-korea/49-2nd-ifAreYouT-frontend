import { useNavigate } from 'react-router-dom';
import './CompletePayment.scss';

const CompletePayment = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };
  return (
    <div className="completePayment">
      <div className="completePaymentContainer">
        <img src="/images/complete.png" alt="" />
        <p>예매가 완료되었습니다.</p>
        <p>주문번호:123019238</p>
        <button onClick={goToHome}>홈으로 돌아가기</button>
      </div>
    </div>
  );
};

export default CompletePayment;
