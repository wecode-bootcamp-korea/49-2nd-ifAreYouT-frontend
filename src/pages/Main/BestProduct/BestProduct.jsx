import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './BestProduct.scss';

const BestProduct = () => {
  const navigate = useNavigate();
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    fetch('/data/mainData.json')
      .then(response => response.json())
      .then(data => setMainData(data))
      .catch(error => console.error('데이터를 불러오는 중 오류 발생:', error));
  }, []);

  const clickBestProduct = id => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <div className="bestProduct">
      {mainData.map(item => (
        <div className="bestProductContainer" key={item.id}>
          <div className="imgBox">
            <img
              src={item.thumbnail}
              alt="이미지 썸네일"
              className="productImg"
              onClick={() => clickBestProduct(item.id)}
            />
          </div>
          <div
            className="productInfo"
            onClick={() => clickBestProduct(item.id)}
          >
            <div className="productTitle">{item.title}</div>
            <div className="productDate">{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestProduct;
