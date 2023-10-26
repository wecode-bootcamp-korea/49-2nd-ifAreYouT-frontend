import { Link } from 'react-router-dom';
import GetTicketView from './getTicketView';
import Like from './like';
import PreBooking from './preBookingView';
import UserInfoUpdate from './userInfoUpdate';
import ViewTicketHistory from './ViewTicketHistory';
import './mypage.scss';

const Mypage = () => {
  return (
    <div className="mypage">
      <div className="mypageContainer">
        <div className="userDivContainer">
          <div className="imgContainer">
            <img
              className="userInfoPhoto"
              src="/images/user-profile-background .jpg"
              alt="유저사진"
            />
          </div>
          <div className="userInfoNameDiv">
            <span className="userInfo">aegis0918@naver.com</span>
            <span className="userInfo">01092290918</span>
          </div>
          <div className="btnContainer">
            <button className="ManagementBtn">정보수정</button>
            <button className="dropOutBtn">회원탈퇴</button>
          </div>
          <div className="CheckedReservationHistoryBtn1">
            <Link to="/" className="CheckedReservationHistoryAtag">
              <span className="CheckedReservationHistoryText">
                예매내역
                <br /> 확인
              </span>
            </Link>
          </div>
          <div className="CheckedReservationHistoryBtn2">
            <Link to="/product-list" className="CheckedReservationHistoryAtag">
              <span className="CheckedReservationHistoryText">
                공연정보
                <br />
                바로가기
              </span>
            </Link>
          </div>
        </div>
        <div className="userCheckedReservationContainer">
          <div className="userCheckedReservationTitle">예매확인</div>
          <div className="userCheckedReservationMain">
            <GetTicketView />
          </div>
        </div>
        <div className="otherThingsContainer">
          <div className="userThingsContainer">
            <div className="userThingsTitle">
              <span className="titleName">좋아요 한 공연</span>
            </div>
            <div className="userThingsMain">
              <Like />
            </div>
          </div>
          <div className="userThingsContainer">
            <div className="userThingsTitle">
              <span className="titleName">나만의 우대권 조회</span>
            </div>
            <div className="userThingsMain">
              <PreBooking />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mypage;
