import './SeatTable.scss';

const SeatTable = ({ seatData, selected, setSelected }) => {
  const handleClick = idx => {
    const buttonState = [...selected];
    buttonState[idx] = !buttonState[idx];
    setSelected(buttonState);
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
          const selectColor = selected[idx] ? 'selected' : `grade${grade}`;
          const buttonColor = status ? selectColor : 'reserved';

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
