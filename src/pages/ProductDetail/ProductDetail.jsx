import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetailData, setProductDetailData] = useState([]);

  useEffect(() => {
    fetch('/data/detailData.json')
      .then(response => response.json())
      .then(data => {
        const detailItem = data.find(item => item.id === parseInt(id));
        setProductDetailData(detailItem);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, [id]);

  return (
    <div className="productDetail">
      <div className="productDetailContainer" key={productDetailData.id}>
        <div className="productDetailTitle">{productDetailData.name}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
