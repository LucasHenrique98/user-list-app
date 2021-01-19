import React, { useEffect, useState } from 'react';
import css from './user.module.css';
import Usuario from './Usuario';

export default function Users({ users }) {
  const [secondsVisible, setSecondsVisible] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsVisible(secondsVisible + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [secondsVisible]);

  return (
    <div className={css.divName}>
      <p className={css.dateUser}>Users visible for {secondsVisible} seconds</p>
      <ul>
        <Usuario user={users} />
      </ul>
    </div>
  );
}
