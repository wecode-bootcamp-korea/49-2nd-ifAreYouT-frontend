import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { HOST } from '../../utils/variable';

const Like = () => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useSearchParams();
  const getParams = search.get('reactionType');
  useEffect(() => {
    axios
      .get(`${HOST}/events/likes?reactionType=exited`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(res => {
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
