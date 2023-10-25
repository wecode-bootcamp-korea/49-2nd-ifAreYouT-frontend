import { useState } from 'react';
import axios from 'axios';
import './SubmitButton.scss';

const SubmitButton = ({ userResponses }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //테스트 통신시 true로 변경

  const handleSubmitButton = () => {
    if (isLoggedIn) {
      axios
        .put(`http://10.58.52.169:8000/promotion/${id}`, { userResponses })
        .then(response => {
          if (response.data === 'success') {
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
      <button onClick={handleSubmitButton}>제출하기</button>
    </div>
  );
};

export default SubmitButton;
