import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const ViewTicketHistory = () => {
  const [state, setState] = useState([]);
  const [seach, setSearch] = useSearchParams();
  useEffect(() => {
    axios
      .get('http://10.58.52.125:8000/orders/details', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MX0sImlhdCI6MTY5NzcxOTY0MiwiZXhwIjoxNzAwMzExNjQyfQ.zuVcbarIWTuPPBm7DvoaYRsKGFV8YJPK68fa2gztFeU',
        },
      })
      .then(res => {
        console.log(res);
      });
  }, []);
};

export default ViewTicketHistory;
