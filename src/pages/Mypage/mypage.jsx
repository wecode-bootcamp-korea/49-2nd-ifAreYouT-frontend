import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './mypage.scss';

const Mypage = () => {
  const [InfoResult, setInfoResult] = useState(false);
  const [reservationData, setReservationData] = useState('');

  // const ReservationDataAxios = async () => {
  //   try {
  //     const response = await axios.get('받아올api');
  //     const reservaitonData = response.data;
  //     setReservationData(reservaitonData);
  //     setInfoResult(true);
  //   } catch (error) {
  //     console.error('데이터 오류:', error);
  //   }
  // };

  const userMockData = './mypageUser.json';

  const userMockDataFunction = () => {};

  // useEffect(() => {
  //   ReservationDataAxios();
  // }, []);

  return (
    <div className="mypage">
      <div className="mypageContainer">
        <div className="userDivContainer">
          <div className="imgContainer">
            <img
              className="userInfoPhoto"
              src="/images/user-profile-background .jpg"
              alt="유저사진"
            ></img>
          </div>
          <div className="userInfoNameDiv">
            <span className="userInfo">aegis0918@naver.com</span>
            <span className="userInfo"></span>
          </div>
          <div className="btnContainer">
            <button className="ManagementBtn">정보수정</button>
            <button className="dropOutBtn">회원탈퇴</button>
          </div>
          <div className="CheckedReservationHistoryBtn1">
            <Link to="/order" className="CheckedReservationHistoryAtag">
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
            {InfoResult ? (
              <ul className="comment">
                {reservationData.map((item, index) => (
                  <li className="reservationList" key={index}>
                    예매한 공연: {item.showName}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="noReservationMessage">
                예매하신 내역이 없습니다.
              </span>
            )}
          </div>
        </div>
        <div className="otherThingsContainer">
          <div className="userThingsContainer">
            <div className="userThingsTitle">
              <span className="titleName">좋아요 한 공연</span>
            </div>
            <div className="userThingsMain">
              {InfoResult ? (
                <ul className="comment">
                  {reservationData.map((item, index) => (
                    <li className="reservationList" key={index}>
                      내가 좋아요한 공연: {item.showName}
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="noReservationMessage">
                  좋아요한 내역이 없습니다.
                </span>
              )}
            </div>
          </div>
          <div className="userThingsContainer">
            <div className="userThingsTitle">
              <span className="titleName">나만의 우대권 조회</span>
            </div>
            <div className="userThingsMain">
              {InfoResult ? (
                <ul className="comment">
                  {reservationData.map((item, index) => (
                    <li className="reservationList" key={index}>
                      우대권 목록: {item.showName}
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="noReservationMessage">
                  사용 가능한 우대권 내역이 없습니다.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mypage;
