import GradeInfo from './GradeInfo/GradeInfo';
import './OrderHeader.scss';

const OrderHeader = ({ seatData, mockLocation }) => {
  const { productImg, productName, location, date } = mockLocation;
  const [years, month, dates, hours] = date.split('-');
  const grade = [...new Set(seatData.map(val => val.seatGrade))];

  return (
    <header className="orderHeader">
      <div className="orderStep">주문/좌석 선택</div>
      <div className="productInfo">
        <div className="concertImgBox">
          <img className="concertImg" src={`${productImg}`} alt="" />
        </div>
        <div className="venue">
          <div className="productName">{productName}</div>
          <div className="location">{location}</div>
          <div className="date">{`${years}년 ${month}월 ${dates}일 ${hours}시`}</div>
        </div>
      </div>
      <div className="gradeInfoBox">
        {grade.map((val, idx) => {
          return <GradeInfo key={idx} value={val} />;
        })}
      </div>
    </header>
  );
};

export default OrderHeader;
