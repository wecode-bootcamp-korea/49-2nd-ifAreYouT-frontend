import { useState } from 'react';
import axios from 'axios';
import { HOST } from '../../../utils/variable';
import './SubmitButton.scss';

const SubmitButton = ({ userResponse, num }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [event, setEvent] = useState(num); // id 값
  const userToken = localStorage.getItem('token');

  const submitData = {
    eventId: event,
    ans: userResponse,
    userId: userToken,
  };

  const handleSubmitButton = () => {
    if (isLoggedIn) {
      axios
        .post(`${HOST}/promotion/${event}`, submitData)
        .then(response => {
          if (response.data === 'success') {
            // 백에서 보내주는 메세지
            window.alert('정답입니다. 팬코드가 발급되었습니다.');
          } else {
            window.alert('오답입니다.');
          }
        })
        .catch(error => {
          console.error('서버에 데이터 전송 중 오류 발생:', error);
          window.alert('서버에 데이터를 전송하는 중 오류가 발생했습니다.');
        });
    } else {
      window.alert('로그인해주세요.');
    }
  };

  return (
    <div className="QuizSubmitButton">
      <button className=" submitBtn" onClick={handleSubmitButton}>
        제출하기
      </button>
    </div>
  );
};

export default SubmitButton;
