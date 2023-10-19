import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetailData, setProductDetailData] = useState({}); // 빈 객체 넣음

  useEffect(() => {
    fetch('/data/detailData.json')
      .then(response => response.json())
      .then(data => {
        if (data && data[id]) {
          setProductDetailData(data[id]); // 객체에서 직접 해당 항목을 가져오는 것으로 변경
        } else {
          console.error('해당 상품을 찾을 수 없습니다.');
        }
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, [id]);
  const { name } = productDetailData;

  return (
    <div className="productDetail">
      <div className="productDetailContainer">
        {/* key prop 삭제 */}
        <div className="productDetailTitle">{name}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
