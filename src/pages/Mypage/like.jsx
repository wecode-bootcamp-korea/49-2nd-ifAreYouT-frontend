import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const Like = () => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useSearchParams();
  const getParams = search.get('reactionType');
  console.log(getParams);
  useEffect(() => {
    axios
      .get(`http://10.58.52.125:8000/events/likes?reactionType=exited`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MX0sImlhdCI6MTY5NzcxOTY0MiwiZXhwIjoxNzAwMzExNjQyfQ.zuVcbarIWTuPPBm7DvoaYRsKGFV8YJPK68fa2gztFeU',
        },
      })
      .then(res => {
        console.log('라이크', res);
        setState(res.data.data);
      });
  }, [getParams]);

  if (!state) {
    return null;
  }

  return (
    <div>
      <ul className="comment">
        {state.length > 0 ? (
          state.map((item, index) => (
            <li className="reservationList" key={index}>
              내가 좋아하는 공연: {`${item.eventName}`}
            </li>
          ))
        ) : (
          <span className="noReservationMessage">
            좋아요를 누른 내역이 없습니다.
          </span>
        )}
      </ul>
    </div>
  );
};

export default Like;
