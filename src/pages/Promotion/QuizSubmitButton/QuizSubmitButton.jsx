import React, { useState, useEffect } from 'react';
import './QuizSubmitButton.scss';

const QuizSubmitButton = () => {
  const [fanStatus, setFanStatus] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false); //참여이력

  useEffect(() => {
    // 로컬 스토리지에서 토큰을 가져옴
    const token = localStorage.getItem('userToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      if (!buttonClicked) {
        setFanStatus(true);
        setButtonClicked(true);
        localStorage.setItem(
          'userEventHistory',
          JSON.stringify({ event: 'Y' }),
        );
        window.alert('정답입니다. 팬코드가 발급되었습니다.');
      } else {
        window.alert('이미 참여했습니다.');
      }
    } else {
      window.alert('로그인해주세요.');
    }
  };

  return (
    <div className="QuizSubmitButton">
      <button onClick={handleButtonClick}>제출하기</button>
    </div>
  );
};

export default QuizSubmitButton;
