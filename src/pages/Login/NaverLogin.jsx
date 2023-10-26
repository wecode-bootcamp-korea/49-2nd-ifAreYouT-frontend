import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HOST } from '../../utils/variable';
import './NaverLogin.scss';

const NaverLogin = () => {
  const UrlName = new URL(window.location.href).searchParams.get('code');
  const NaverUrlAuthName = process.env.REACT_APP_NEVER_API_KEY;
  const Navigate = useNavigate();

  useEffect(() => {
    UrlName &&
      axios
        .get(`${HOST}/auth/naver/callback?code=${UrlName}`)
        .then(response => {
          if ((response.message = 'LOGIN_SUCCESS')) {
            localStorage.setItem('token', response.token);
            Navigate('/');
          }
        })
        .catch(error => {
          console.error('에러:', error);
        });
  });

  return (
    <div className="naverLogin">
      <a className="naverAtag" href={NaverUrlAuthName}>
        <span className="naverSpan">
          <img
            className="naverImg"
            src="/images/login_naver.svg"
            alt="네이버"
          />
        </span>
        <p className="naverText">네이버로 입장하기</p>
      </a>
    </div>
  );
};

export default NaverLogin;
