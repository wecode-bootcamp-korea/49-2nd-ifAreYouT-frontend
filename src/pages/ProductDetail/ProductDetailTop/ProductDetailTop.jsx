import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactionButton from '../ReactionButton/ReactionButton';
import './ProductDetailTop.scss';

const ProductDetailTop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/productDetailData.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, []);

  // id에 해당하는 데이터 찾기
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
    navigate('/order'); // 'order' 페이지로 이동
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
                S석 {seatS} ㅣ R석 {seatR} ㅣ A석 {seatA}
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
            </div>
          </div>
        </div>
      </div>
      <ReactionButton />
      <button className="orderButton" onClick={handleOrderClick}>
        예매하기
      </button>
    </div>
  );
};

export default ProductDetailTop;
