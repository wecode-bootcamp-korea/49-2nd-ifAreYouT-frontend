import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { HOST } from '../../utils/variable';

const ViewTicketHistory = () => {
  const [state, setState] = useState([]);
  const [seach, setSearch] = useSearchParams();
  useEffect(() => {
    axios
      .get(`${HOST}/orders/details`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(res => {
        console.log(res);
      });
  }, []);
};

export default ViewTicketHistory;
