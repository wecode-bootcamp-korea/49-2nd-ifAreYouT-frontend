import { useEffect, useState } from 'react';
import axios from 'axios';
import { HOST } from '../../utils/variable';

const GetTicketView = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(`${HOST}/tickets`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(res => {
        setState(res.data.data);
      });
  }, []);

  return (
    <div className="ticketDiv">
      <ul className="comment">
        {state ? (
          state.map((item, index) => (
            <li className="reservationList" key={index}>
              예매한 공연:
              {`${item.ticketCode} ${item.eventName} ${item.rowName}
              ${item.colName}`}
            </li>
          ))
        ) : (
          <span className="noReservationMessage">
            예매하신 내역이 없습니다.
          </span>
        )}
      </ul>
    </div>
  );
};
export default GetTicketView;
