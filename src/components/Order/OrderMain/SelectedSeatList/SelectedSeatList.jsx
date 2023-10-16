import './SelectedSeatList.scss';

const SelectedSeatList = ({ seatData }) => {
  const selectedSeat = (() => {
    const chooseSeat = [];
    seatData.forEach((val, idx) => {
      const { status } = val;
      if (status === 'selected') {
        chooseSeat.push(idx);
      }
    });
    return chooseSeat;
  })(seatData);
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
