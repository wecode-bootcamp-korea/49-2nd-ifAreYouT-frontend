import ProductDetailTop from './ProductDetailTop/ProductDetailTop';
import ProductDetailBottom from './ProductDetailBottom/ProductDetailBottom';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="productDetailContainer"></div>
      <ProductDetailTop />
      <ProductDetailBottom />
    </div>
  );
};

export default ProductDetail;
