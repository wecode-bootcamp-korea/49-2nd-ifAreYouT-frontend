import GradeInfo from './GradeInfo/GradeInfo';
import './OrderHeader.scss';

const OrderHeader = ({ detail, state }) => {
  const { detailImage, description, stage, startDate } = state;
  const [years, month, dates, hours] = startDate.split('.');
  return (
    <header className="orderHeader">
      <div className="orderStep">주문/좌석 선택</div>
      <div className="productInfo">
        <div className="concertImgBox">
          <img className="concertImg" src={`${detailImage}`} alt="" />
        </div>
        <div className="venue">
          <div className="productName">{description}</div>
          <div className="location">{stage}</div>
          <div className="date">{`${years}년 ${month}월 ${dates}일 ${hours}시`}</div>
        </div>
      </div>
      <div className="gradeInfoBox">
        {detail.map((val, idx) => {
          return <GradeInfo key={idx} value={val} />;
        })}
      </div>
    </header>
  );
};

export default OrderHeader;
