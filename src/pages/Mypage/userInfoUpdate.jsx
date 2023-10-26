import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const UserInfoUpdate = () => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useSearchParams();
  const getParams = search.get('userId');
  useEffect(() => {
    axios
      .post(
        `http://10.58.52.125:8000/users?userId=${getParams}`,
        {
          email: 'qwerty123@naver.com',
          nickname: '',
          phoneNumber: '010-1234-5678',
        },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MX0sImlhdCI6MTY5NzcxOTY0MiwiZXhwIjoxNzAwMzExNjQyfQ.zuVcbarIWTuPPBm7DvoaYRsKGFV8YJPK68fa2gztFeU',
          },
        },
      )
      .then(res => {
        console.log(res);
      });
  }, [getParams]);
};

export default UserInfoUpdate;
