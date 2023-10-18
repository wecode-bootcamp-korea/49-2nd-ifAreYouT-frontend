import Timer from './Timer/Timer';
import './PaymentMain.scss';

const PaymentMain = ({ state }) => {
  const { mockLocation, selectedName, totalPrice } = state;
  const { productName, location, date } = mockLocation;
  const [years, month, dates, hours] = date.split('-');
  const timeLimit = new Date(new Date().getTime() + 600000);

  return (
    <main className="paymentMain">
      <div className="paymentInfo">
        <Timer timeLimit={timeLimit} />
        <div className="venue">
          <div className="productName">{productName}</div>
          <div className="location">{location}</div>
          <div className="date">{`${years}년 ${month}월 ${dates}일 ${hours}시`}</div>
        </div>
        <div className="notice" />
      </div>
      <div className="paymentMethod">
        {selectedName} {totalPrice}
      </div>
    </main>
  );
};

export default PaymentMain;
