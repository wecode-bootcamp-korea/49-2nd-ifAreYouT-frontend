import ProductDetailTop from './ProductDetailTop/ProductDetailTop';
import ProductDetailBottom from './ProductDetailBottom/ProductDetailBottom';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="productDetail">
      <ProductDetailTop />
      <ProductDetailBottom />
    </div>
  );
};

export default ProductDetail;
