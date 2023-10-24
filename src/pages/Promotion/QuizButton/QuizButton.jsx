import React, { useState } from 'react';
import axios from 'axios';

const PromotionAndQuizButton = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const isLoggedIn = !!localStorage.getItem('userToken');
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleOptionClick = option => {
    setSelectedOptions(prevOptions => {
      // 이미 선택한 옵션인지 확인
      if (prevOptions.includes(option)) {
        return prevOptions.filter(item => item !== option);
      } else {
        return [...prevOptions, option];
      }
    });
  };

  const handleButtonClick = () => {
    if (isLoggedIn) {
      if (!buttonClicked) {
        // 선택한 내용을 JSON 형식으로 만들기
        const selectedData = { selectedOptions };

        // Axios를 사용하여 선택한 내용을 백엔드로 전송
        axios
          .post('/api/submit', selectedData)
          .then(response => {
            // 백엔드 응답 처리
            setButtonClicked(true);
            localStorage.setItem(
              'userEventHistory',
              JSON.stringify({ event: 'Y' }),
            );
            window.alert('정답입니다. 팬코드가 발급되었습니다.');
          })
          .catch(error => {
            // 에러 처리
            console.error('서버에 데이터 전송 중 오류 발생:', error);
            window.alert('서버에 데이터를 전송하는 중 오류가 발생했습니다.');
          });
      } else {
        window.alert('이미 참여했습니다.');
      }
    } else {
      window.alert('로그인해주세요.');
    }
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            value="진실"
            checked={selectedOptions.includes('진실')}
            onChange={() => handleOptionClick('진실')}
          />
          진실
        </label>
        <label>
          <input
            type="checkbox"
            value="거짓"
            checked={selectedOptions.includes('거짓')}
            onChange={() => handleOptionClick('거짓')}
          />
          거짓
        </label>
      </div>
      <div className="QuizSubmitButton">
        <button onClick={handleButtonClick}>제출하기</button>
      </div>
    </div>
  );
};

export default PromotionAndQuizButton;
