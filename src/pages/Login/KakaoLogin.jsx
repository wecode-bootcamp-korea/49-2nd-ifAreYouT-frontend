import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './KakaoLogin.scss';

const KakaoLogin = () => {
  const UrlName = new URL(window.location.href).searchParams.get('code');
  const kakaoUrlAuthName = process.env.REACT_APP_API_KEY;
  const Navigate = useNavigate();

  useEffect(() => {
    UrlName &&
      axios
        .get(`http://10.58.52.179:8000/auth/kakao/callback?code=${UrlName}`)
        .then(response => {
          if ((response.message = '로그인 성공!')) {
            localStorage.setItem('token', response.token);
            Navigate('/');
          }
          console.log('데이터:', response.data);
        })
        .catch(error => {
          console.error('에러:', error);
        });
  });

  return (
    <div className="kakaoLogin">
      <a className="kakaoAtag" href={kakaoUrlAuthName}>
        <span className="kakaoSpan">
          <img
            className="kakaoImg"
            src="/images/카카오톡_로고_3.png"
            alt="카카오"
          />
        </span>
        <p className="kakaoText">카카오로 입장하기</p>
      </a>
    </div>
  );
};

export default KakaoLogin;
