import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './BestProduct.scss';

const BestProduct = () => {
  const navigate = useNavigate();
  const [mainData, setMainData] = useState({});

  useEffect(() => {
    axios
      .get('/data/mainData.json') // fetch에서 axios로 변경
      .then(response => {
        setMainData(response.data);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, []);

  const goToBestProduct = id => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <div className="bestProduct">
      {mainData &&
        Object.values(mainData).map(item => (
          <div className="bestProductContainer" key={item.id}>
            <div className="imgBox">
              <img
                src={item.thumbnail}
                alt="공연 포스터"
                className="productImg"
                onClick={() => goToBestProduct(item.id)}
              />
            </div>
            <div
              className="productInfo"
              onClick={() => goToBestProduct(item.id)}
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
