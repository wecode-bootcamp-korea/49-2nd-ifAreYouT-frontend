import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactionButton from '../ReactionButton/ReactionButton';
import axios from 'axios';
import './ProductDetailTop.scss';

const formatPrice = price => {
  if (price) {
    // price를 숫자로 변환
    const priceNumeric = parseInt(price.replace(/[^0-9]/g, ''));

    if (!isNaN(priceNumeric)) {
      return priceNumeric.toLocaleString('ko-KR') + '원';
    }
  }
  return ''; // 가격이 없을 경우 빈 문자열 반환
};

const ProductDetailTop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFan, setIsFan] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      setIsLoggedIn(true);
    }

    if (isLoggedIn) {
      axios
        .get('/api 주소')
        .then(response => {
          const fanStatus = response.data.fanStatus;
          if (fanStatus === 'Y') {
            setIsFan(true);
          }
        })
        .catch(error => {
          console.error('팬 여부 확인 중 오류 발생:', error);
        });
    }

    axios
      .get('/data/productDetailData.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, [isLoggedIn]);

  const selectedProduct = data.find(item => item.id === parseInt(id));

  const {
    title,
    thumbnailImage,
    stage,
    startDate,
    playTime,
    seatS,
    seatR,
    seatA,
    seats,
    age,
  } = selectedProduct || {};

  const handleOrderClick = () => {
    if (isFan) {
      // 팬 코드가 있는지 여부만 확인
      navigate('/order'); // 상태(state) 변경 코드 추가, 오더페이지로 전송
    } else if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
    } else {
      alert('팬 코드가 발급되지 않았습니다.');
    }
  };

  return (
    <div className="productDetailTop">
      <div className="productDetailTopContainer">
        <div className="productTitle">{title}</div>
        <div className="infoContainer">
          <div className="thumbnailImage">
            <img src={thumbnailImage} alt="Product Thumbnail" />
          </div>

          <div className="productInfoText">
            <div className="label">
              <div className="stageLabel">장소</div>
              <div className="startDateLabel">일정</div>
              <div className="playTimeLabel">관람시간</div>
              <div className="ageLabel">관람등급</div>
              <div className="priceLabel">가격</div>
              <div className="availableSeatsLabel">잔여좌석</div>
            </div>
            <div className="infoData">
              <div className="stage">{stage}</div>
              <div className="startDate">{startDate}</div>
              <div className="playTime">{playTime}</div>
              <div className="age">{age}</div>
              <div className="price">
                <div className="priceSeatS"> S석 {formatPrice(seatS)} </div>
                <div className="priceSeatR">R석 {formatPrice(seatR)} </div>
                <div className="priceSeatA"> A석 {formatPrice(seatA)} </div>
              </div>
              <div className="availableSeats">
                {seats &&
                  seats.map(seat => (
                    <div key={seat.grade}>
                      <div>
                        {seat.grade} :{' '}
                        {seat.available === 0 ? '매진' : seat.available}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="orderBtn">
                <button className="orderButton" onClick={handleOrderClick}>
                  예매하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactionButton />
    </div>
  );
};

export default ProductDetailTop;
