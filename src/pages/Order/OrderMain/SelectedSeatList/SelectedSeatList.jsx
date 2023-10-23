import './SelectedSeatList.scss';

const SelectedSeatList = ({ seatData, detail }) => {
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
        const price = detail.filter(el => el.grade === seatData[val].grade)[0]
          .price;

        return (
          <div className="selectSeat" key={val}>
            {seatData[val].name} : {Number(price).toLocaleString()}원
          </div>
        );
      })}
    </div>
  );
};

export default SelectedSeatList;
