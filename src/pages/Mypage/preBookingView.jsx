import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { HOST } from '../../utils/variable';

const PreBooking = () => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useSearchParams();
  const getParams = search.get('preorderPassesId');
  useEffect(() => {
    axios
      .get(`${HOST}/preorder-pass`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(res => {
        setState(res.data.data);
      });
  }, []);
  return (
    <div className="likeDiv">
      <ul className="comment">
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
