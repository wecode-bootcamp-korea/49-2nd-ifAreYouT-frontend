import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Promotion.scss';

const Promotion = () => {
  const { id } = useParams();
  const [promotionItem, setPromotionItem] = useState(null);

  useEffect(() => {
    axios
      .get('/data/promotionData.json') // fetch를 axios로 변경
      .then(response => {
        if (response.status !== 200) {
          throw new Error('데이터를 가져오는 중 오류 발생');
        }
        return response.data;
      })
      .then(data => {
        const item = data.find(item => item.id === parseInt(id));
        setPromotionItem(item);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, [id]);

  return (
    <div className="promotion">
      {promotionItem ? (
        <div className="promotionContainer" key={promotionItem.id}>
          <div className="productTitle">{promotionItem.quiz}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Promotion;
