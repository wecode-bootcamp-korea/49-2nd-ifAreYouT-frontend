import { useNavigate } from 'react-router-dom';
import { useResultOfIntervalCalculator } from '../../../../utils/customHook';
import './Timer.scss';

const Timer = ({ timeLimit }) => {
  const navigate = useNavigate();
  const remain = useResultOfIntervalCalculator(() =>
    Math.floor((new Date(timeLimit) - new Date()) / 1000, 10),
  );
  if (Number(remain) <= 0) {
    alert('예매시간이 끝났습니다.');
    navigate('/order');
  }

  const minutes = Math.floor(remain / 60);
  const seconds = String(remain % 60).padStart(2, '0');

  return (
    <div className="timer">
      남은 시간 : {minutes}분 {seconds}초
    </div>
  );
};

export default Timer;
