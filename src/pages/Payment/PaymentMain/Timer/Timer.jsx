import { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(300);

  useEffect(() => {
    let timer;
    if (count >= 0) {
      timer = setInterval(() => {
        setCount(count - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <div className="timer">{count}</div>;
};

export default Timer;
