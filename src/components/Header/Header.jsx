import { useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };
  const goToList = e => {
    const { className } = e.target;
    navigate(`/list`, {
      state: className.split(' ')[0],
    });
  };
  const goToLogin = () => {
    navigate('/login');
  };

  const goToSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <header className="header">
      <div className="leftSide">
        <img
          src="/images/logo.png"
          alt="logo"
          className="logo"
          onClick={goToHome}
        />
        <div className="ballad navButton" onClick={goToList}>
          발라드
        </div>
        <div className="hiphop navButton" onClick={goToList}>
          힙합
        </div>
        <div className="jazz navButton" onClick={goToList}>
          재즈
        </div>
        <div className="idol navButton" onClick={goToList}>
          아이돌
        </div>
      </div>
      <div className="rightSide">
        {localStorage.getItem('token') ? (
          <div className="rightSideDetail">
            <div>로그 아웃</div>
            <div>마이 페이지</div>
          </div>
        ) : (
          <div className="rightSideDetail">
            <div onClick={goToLogin}>로그인</div>
            <div onClick={goToSignUp}>회원 가입</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
