import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [notification, setNotification] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleLoginClick = () => {
    // Login 페이지로 이동
    navigate('/login');
  };

  const userPhoneCheckedFuction = e => {
    const writedValue = e.target.value;
    const regNumber = /^(01[0-1697])\d{7,8}$/;
    setInputValue(writedValue);
    if (regNumber.test(writedValue)) {
      setIsButtonDisabled(false);
      setNotification(<span className="valid">올바른 전화번호입니다.</span>);
    } else {
      setIsButtonDisabled(true);
      setNotification(
        <span className="invalid">올바르지 않은 전화번호형식입니다.</span>,
      );
    }
  };
  console.log(inputValue);

  return (
    <div className="signUp">
      <div className="signUpContainer">
        <div className="phoneNumberContainer">
          <span className="introText">
            회원님의 휴대전화 번호를 입력해주세요.
          </span>
          <input
            className="phoneNumberInput"
            placeholder="번호를 입력해주세요."
            value={inputValue}
            onChange={userPhoneCheckedFuction}
          />
          <span className="inputValueBox">{notification}</span>
          <div className="buttonInputDiv">
            <button
              onClick={handleLoginClick}
              className={`enterLogin ${isButtonDisabled ? 'disabled' : ''}`}
              disabled={isButtonDisabled}
            >
              <span className="confirmBtn">확인</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
