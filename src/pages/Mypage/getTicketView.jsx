import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const GetTicketView = () => {
  const [state, setState] = useState([]);
  const [seach, setSearch] = useSearchParams();
  useEffect(() => {
    axios
      .get('http://10.58.52.125:8000/tickets', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MX0sImlhdCI6MTY5NzcxOTY0MiwiZXhwIjoxNzAwMzExNjQyfQ.zuVcbarIWTuPPBm7DvoaYRsKGFV8YJPK68fa2gztFeU',
        },
      })
      .then(res => {
        console.log(res);
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
