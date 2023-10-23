import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './BestProduct.scss';

const BestProduct = () => {
  const navigate = useNavigate();
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    axios
      .get('/data/mainData.json')
      // .get('http://10.58.52.169:8000/events/main')
      .then(response => {
        console.log(response);
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
      {mainData.map(item => (
        <div
          className="bestProductContainer"
          key={item.id}
          onClick={() => goToBestProduct(item.id)}
        >
          <div className="imgBox">
            <img
              src={item.thumbnail}
              alt="공연 포스터"
              className="productImg"
            />
          </div>
          <div className="productInfo">
            <div className="productTitle">{item.title}</div>
            <div className="productDate">{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestProduct;
