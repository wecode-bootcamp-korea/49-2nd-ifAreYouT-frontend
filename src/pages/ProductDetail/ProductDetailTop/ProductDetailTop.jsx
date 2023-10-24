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

  const fetchProductDetailData = () => {
    axios
      .get('/data/productDetailData.json')
      .then(({ data }) => {
        setData(data.data);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  };

  useEffect(() => {
    fetchProductDetailData(); // 함수를 호출합니다
  }, []);

  //함수로 만들어서 리액션버튼 컴포넌트에서 props로 받아서 쓰기->함수호출

  const handleOrderClick = () => {
    // 로그인을 안했을때
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');

      return;
    }

    axios
      .get(`http://10.58.52.221:8000/events/passcheck/${id}`)
      .then(response => {
        if (response.status === 209) {
          navigate(`/order/${id}`, { state: data });
        }
      })
      .catch(error => {
        alert('프리 오더 패스가 없어 예매가 불가능합니다.');
      });
  };

  if (Object.keys(data).length === 0) return null;

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
                    매진
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
        hasVoted={participate[0].status === 1}
        fetchProductDetailData={fetchProductDetailData}
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
