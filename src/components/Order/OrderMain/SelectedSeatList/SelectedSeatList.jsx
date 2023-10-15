import './SelectedSeatList.scss';

const SelectedSeatList = ({ seatData, selected }) => {
  const selectedSeat = (() => {
    const chooseSeat = [];
    selected.forEach((val, idx) => {
      if (val) {
        chooseSeat.push(idx);
      }
    });
    return chooseSeat;
  })(selected);
  return (
    <div className="selectedSeatList">
      {selectedSeat.map(val => {
        return (
          <div className="selectSeat" key={val}>
            {seatData[val].name} :{' '}
            {seatData[val].seatGrade.price.toLocaleString()}원
          </div>
        );
      })}
    </div>
  );
};

export default SelectedSeatList;
