import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { HOST } from '../../utils/variable';

const UserInfoUpdate = () => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useSearchParams();
  const getParams = search.get('userId');
  useEffect(() => {
    axios
      .post(
        `${HOST}/users?userId=${getParams}`,
        {
          email: 'qwerty123@naver.com',
          nickname: '',
          phoneNumber: '010-1234-5678',
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        },
      )
      .then(res => {
        console.log(res);
      });
  }, [getParams]);
};

export default UserInfoUpdate;
