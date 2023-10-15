import GradeInfo from './GradeInfo/GradeInfo';
import './OrderHeader.scss';

const OrderHeader = ({ grade }) => {
  return (
    <div className="orderHeader">
      <div className="orderStep">주문/좌석 선택</div>
      <div className="productInfo">장소 : 테헤란로</div>
      <div className="gradeInfoBox">
        {grade.map((val, idx) => {
          return <GradeInfo key={idx} value={val} />;
        })}
      </div>
    </div>
  );
};

export default OrderHeader;
