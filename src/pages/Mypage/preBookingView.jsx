import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const PreBooking = () => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useSearchParams();
  const getParams = search.get('preorderPassesId');
  useEffect(() => {
    axios
      .get('http://10.58.52.125:8000/preorder-pass', {
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
    <div className="likeDiv">
      <ul className="likeComment">
        {state ? (
          state.map((item, index) => (
            <li className="reservationList" key={index}>
              `사용가능한 우대권: {`${item.has_preorder_pass}`}
            </li>
          ))
        ) : (
          <span className="noReservationMessage">우대권이 없습니다.</span>
        )}
      </ul>
    </div>
  );
};

export default PreBooking;
