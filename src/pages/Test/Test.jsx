// import { useEffect } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import axios from 'axios';
// import { HOST } from '../../utils/variable';
// import './KakaoLogin.scss';

// const KakaoLogin = () => {
//   // const [serchParams] = useSearchParams();
//   // const UrlName = serchParams.get('code');
//   const kakaoUrlAuthName = process.env.REACT_APP_API_KEY;
//   const Navigate = useNavigate();

//   useEffect(() => {
//     // UrlName &&
//     axios
//       .get(`http://10.58.52.210/auth/kakao/callback?code=${UrlName}`)
//       .then(res => {
//         if (res.message === '로그인 성공!') {
//           localStorage.setItem('token', res.accessToken);
//           Navigate('/');
//         }
//       })
//       .catch(error => {
//         alert('오류입니다.');
//         console.error('에러:', error);
//       });
//   }, []);

//   return (
//     <div className="kakaoLogin">
//       <a className="kakaoAtag" href={kakaoUrlAuthName}>
//         <span className="kakaoSpan">
//           <img
//             className="kakaoImg"
//             src="/images/카카오톡_로고_3.png"
//             alt="카카오"
//           />
//         </span>
//         <p className="kakaoText">카카오로 입장하기</p>
//       </a>
//     </div>
//   );
// };

// export default KakaoLogin;
