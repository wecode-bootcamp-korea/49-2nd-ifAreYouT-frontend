import {
  AVAILABLE,
  RESERVED,
  BOOKING,
  SELECTED,
} from '../../../../components/variable';
import './SeatTable.scss';

const SeatTable = ({ seatData, setSeatData }) => {
  const handleClick = idx => {
    const buttonState = [...seatData];
    if (buttonState[idx].status === AVAILABLE) {
      buttonState[idx].status = SELECTED;
    } else if (buttonState[idx].status === SELECTED) {
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
          const { seatId, status, seatGrade } = seatInfo;
          const { grade } = seatGrade;
          const selectColor = status === SELECTED ? SELECTED : `grade${grade}`;
          const buttonColor =
            status === RESERVED || status === BOOKING ? RESERVED : selectColor;

          return (
            <input
              className={`seat ${buttonColor}`}
              key={seatId}
              type="Button"
              onClick={() => handleClick(idx)}
              disabled={!status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SeatTable;
