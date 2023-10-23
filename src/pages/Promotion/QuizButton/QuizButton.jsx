import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuizButton.scss';

const PromotionButton = () => {
  const [selectedOptions, setSelectedOptions] = useState([]); // 선택한 옵션을 배열로 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false); // 참여 이력

  useEffect(() => {
    // 로컬 스토리지에서 토큰을 가져옴
    const token = localStorage.getItem('userToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleOptionClick = option => {
    if (isLoggedIn) {
      if (!buttonClicked) {
        setSelectedOptions(prevOptions => [...prevOptions, option]);
      } else {
        window.alert('이미 참여했습니다.');
      }
    } else {
      window.alert('로그인해주세요.');
    }
  };

  const handleSubmit = () => {
    if (isLoggedIn) {
      if (selectedOptions.length > 0) {
        // 선택한 옵션을 백엔드로 전송
        axios
          .post('/api/submitOptions', { options: selectedOptions })
          .then(response => {
            // 백엔드로부터의 응답 처리
            window.alert('응답이 제출되었습니다.');
          })
          .catch(error => {
            console.error('오류 발생:', error);
          });
      } else {
        window.alert('선택한 옵션이 없습니다.');
      }
    } else {
      window.alert('로그인해주세요.');
    }
  };

  return (
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
  );
};

export default PromotionButton;
