import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './BestProduct.scss';

const BestProduct = ({ events, navigate }) => {
  const [mainData, setMainData] = useState(events);

  useEffect(() => {
    setMainData(events);
  }, [events]);

  const goToBestProduct = id => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="bestProduct">
      {mainData.map(item => (
        <div className="bestProductContainer" key={item.id}>
          <div className="imgBox">
            <img
              src={item.thumbnail}
              alt="공연 포스터"
              className="productImg"
              onClick={() => goToBestProduct(item.id)}
            />
          </div>
          <div className="productInfo" onClick={() => goToBestProduct(item.id)}>
            <div className="productTitle">{item.title}</div>
            <div className="productDate">{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestProduct;
