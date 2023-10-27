import { useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };
  const goToList = e => {
    const { className } = e.target;
    navigate(`/product-list`, {
      state: className.split(' ')[0],
    });
  };
  const goToLogin = () => {
    navigate('/login');
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
      </div>
      <div className="channelDiv">
        <div className="ballad navButton" onClick={goToList}>
          <span>Ballad</span>
        </div>
        <div className="hiphop navButton" onClick={goToList}>
          <span>HipHop</span>
        </div>
        <div className="jazz navButton" onClick={goToList}>
          <span>Jazz</span>
        </div>
        <div className="idol navButton" onClick={goToList}>
          <span>Idol</span>
        </div>
      </div>
      <div className="rightSide">
        {localStorage.getItem('token') ? (
          <div className="rightSideDetail">
            <div>로그아웃</div>
            <div>마이 페이지</div>
          </div>
        ) : (
          <div className="rightSideDetail">
            <div onClick={goToLogin}>로그인</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
