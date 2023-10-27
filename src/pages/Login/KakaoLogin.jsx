import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { HOST } from '../../utils/variable';
import './KakaoLogin.scss';

const KakaoLogin = () => {
  const kakaoUrlAuthName = process.env.REACT_APP_API_KEY;

  const goTokakao = () => {
    window.location.href = kakaoUrlAuthName;
  };

  return (
    <div className="kakaoLogin">
      <a className="kakaoAtag" onClick={goTokakao}>
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
