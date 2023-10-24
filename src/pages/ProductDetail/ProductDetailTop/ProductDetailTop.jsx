import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactionButton from '../ReactionButton/ReactionButton';
import axios from 'axios';
import './ProductDetailTop.scss';

const ProductDetailTop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const isLoggedIn = !!localStorage.getItem('userToken');

  useEffect(() => {
    axios
      .get('/data/productDetailData.json')
      // .get(`http://10.58.52.169:8000/events/${id}`)
      .then(({ data }) => {
        setData(data.data);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, []);

  const handleOrderClick = () => {
    if (status === 'merchandise') {
      return;
    }

    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');

      return;
    }

    //프리오더패스 관련 로직 추가해야함.

    navigate(`/order/${id}`, { state: data });
  };

  if (Object.keys(data).length === 0) return null;

  const {
    title,
    thumbnailImage,
    stage,
    startDate,
    playTime,
    seats,
    status,
    reactions,
    participate,
  } = data;

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

              <div className="priceLabel">가격</div>
              <div className="availableSeatsLabel">잔여좌석</div>
            </div>
            <div className="infoData">
              <div className="stage">{stage}</div>
              <div className="startDate">{startDate}</div>
              <div className="playTime">{playTime}분</div>

              <div className="price">
                {seats.map(seats => (
                  <div key={seats.grade}>
                    <div>
                      {seats.grade}석 : {formatPrice(seats.price)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="availableSeats">
                {seats.map(seats => (
                  <div key={seats.grade}>
                    <div>
                      {seats.grade}석 :{' '}
                      {seats.available === 0 ? '매진' : seats.available}
                    </div>
                  </div>
                ))}
              </div>
              <div className="orderBtn">
                {status === 'merchandise' ? (
                  <button className="orderButton" disabled>
                    판매 중단
                  </button>
                ) : (
                  <button className="orderButton" onClick={handleOrderClick}>
                    예매하기
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactionButton
        reaction={reactions[0]}
        hasVoted={Boolean(participate[0].status)}
      />
    </div>
  );
};

export default ProductDetailTop;

//호이스팅
const formatPrice = price => {
  if (price) {
    const priceNumeric = parseInt(price);

    if (!isNaN(priceNumeric)) {
      return priceNumeric.toLocaleString('ko-KR') + '원';
    }
  }
  return '';
};
