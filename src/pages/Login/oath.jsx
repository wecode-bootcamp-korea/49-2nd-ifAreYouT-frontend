import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OAuth = () => {
  const [serchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  useEffect(() => {
    code &&
      axios
        .get(`http://10.58.52.243:8000/auth/kakao/login/?code=${code}`)
        .then(res => {
          if (res.message === 'LOGIN_SUCCESS') {
            const authToken = res.data.token;
            localStorage.setItem('token', authToken);
            navigate('/');
          } else if (res.message !== 'LOGIN_SUCCESS') {
            return null;
          }
        })
        .catch(error => {
          alert('오류입니다.');
          console.error('에러:', error);
        });
  }, []);
};

export default OAuth;
