import {
  AVAILABLE,
  RESERVED,
  DISABLED,
  SELECTED,
} from '../../../../utils/variable';
import './SeatTable.scss';

const SeatTable = ({ seatData, setSeatData }) => {
  const handleClick = idx => {
    const buttonState = [...seatData];
    const seatStatus = buttonState[idx].status;
    const numberOfSelectedSeats = buttonState.filter(
      el => el.status === SELECTED,
    ).length;

    if (seatStatus === AVAILABLE && numberOfSelectedSeats === 10) {
      alert('예매 가능한 최대 매수는 10매입니다.');
    } else if (seatStatus === AVAILABLE && numberOfSelectedSeats < 10) {
      buttonState[idx].status = SELECTED;
    } else if (seatStatus === SELECTED) {
      buttonState[idx].status = AVAILABLE;
    }

    setSeatData(buttonState);
  };

  const column = new Set(seatData.map(val => val.name.split('-')[1])).size;
  const row = new Set(seatData.map(val => val.name[0])).size;
  return (
    <div className="seatTable">
      <div />
      <div className={`seatColumn${column}`}>
        {Array(column)
          .fill(1)
          .map((val, idx) => {
            return (
              <div className="column" key={idx}>
                {val + idx}
              </div>
            );
          })}
      </div>
      <div className={`seatRow${row}`}>
        {Array(row)
          .fill(1)
          .map((val, idx) => {
            return (
              <div className="row" key={idx}>
                {String.fromCharCode(val + idx + 64)}
              </div>
            );
          })}
      </div>
      <div className={`seatList column${column} row${row}`}>
        {seatData.map((seatInfo, idx) => {
          const { id, status, grade } = seatInfo;
          const selectColor = status === SELECTED ? SELECTED : `grade${grade}`;
          const evaluationStatus = status === RESERVED || status === DISABLED;
          const buttonColor = evaluationStatus ? RESERVED : selectColor;

          return (
            <input
              className={`seat ${buttonColor}`}
              key={id}
              type="Button"
              onClick={() => handleClick(idx)}
              disabled={evaluationStatus}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SeatTable;
