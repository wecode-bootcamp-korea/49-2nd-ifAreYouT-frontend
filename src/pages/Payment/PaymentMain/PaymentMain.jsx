import Timer from './Timer/Timer';
import NoticeTable from './NoticeTable/NoticeTable';
import PaymentMethod from './PaymentMethod/PaymentMethod';
import './PaymentMain.scss';

const PaymentMain = ({ state, orderNumber }) => {
  const { mockLocation, selectedName, totalPrice } = state;
  const { productName, productImg, location, date } = mockLocation;
  const [years, month, dates, hours] = date.split('-');
  const timeLimit = new Date(new Date().getTime() + 600000);

  return (
    <main className="paymentMain">
      <div className="paymentInfo">
        <Timer timeLimit={timeLimit} />
        <div className="venue">
          <img src={`${productImg}`} alt="concertImg" />
          <div className="productInfo">
            <div className="productName">{productName}</div>
            <div className="location">{location}</div>
            <div className="date">{`${years}년 ${month}월 ${dates}일 ${hours}시`}</div>
          </div>
        </div>
        <NoticeTable />
      </div>
      <PaymentMethod
        selectedName={selectedName}
        totalPrice={totalPrice}
        productName={productName}
        orderNumber={orderNumber}
      />
    </main>
  );
};

export default PaymentMain;
