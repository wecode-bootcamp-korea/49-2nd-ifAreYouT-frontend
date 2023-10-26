import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Kakao from '../Login/KakaoLogin';
import Naver from '../Login/NaverLogin';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="titleContainer">
          <span className="titleName">If you are ticketing?</span>
        </div>
        <div className="loginImageContainer">
          <img
            className="imagevariation"
            src="images\xxyTLDbYnN4uGEFNR-VpNVMa-iK5c5-zvzd4VOoBOuMBfzhqx1K8mcToaQ7K17D7OoqypoJolu3uAKURgooBOQ.webp"
            alt="로그인 이미지"
          ></img>
        </div>
        <div className="loginButtonContainer">
          <Kakao />
          <Naver />
        </div>
      </div>
    </div>
  );
};

export default Login;
