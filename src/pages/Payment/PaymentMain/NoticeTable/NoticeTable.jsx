import './NoticeTable.scss';

const NoticeTable = () => {
  return (
    <div className="noticeTable">
      <div className="noticeHeader">
        <div>내용</div>
        <div>취소수수료</div>
        <div>비고</div>
      </div>
      <div className="noticeBox">예매 후 7일 이내</div>
      <div className="noticeBox">없음</div>
      <div className="remark">
        <p>-취소 시 예매수수료는 예매 당일 밤 12시 이전 까지만 환불됩니다.</p>
        <p>
          -예매 후 7일 이내라도 취소시점이 관람일로부터 10일 이내라면 그에
          해당하는 취소수수료가 부과 됩니다.
        </p>
        <p>
          -관람 당일 취소 가능 상품의 경우 관람 당일 취소 시 티켓금액의 90%가
          취소수수료로 부과됩니다.
        </p>
      </div>
      <div className="noticeBox">예매 후 8일 ~ 관람일 10일 전</div>
      <div className="noticeBox">티켓 금액의 5%</div>
      <div className="noticeBox">관람일 9일 전 ~ 관람일 7일 전</div>
      <div className="noticeBox">티켓 금액의 10%</div>
      <div className="noticeBox">관람일 6일 전 ~ 관람일 3일 전</div>
      <div className="noticeBox">티켓 금액의 20%</div>
      <div className="noticeBox">관람일 2일 전 ~ 관람일 1일 전</div>
      <div className="noticeBox">티켓 금액의 30%</div>
    </div>
  );
};

export default NoticeTable;
