import React, { useState, useEffect } from 'react';
const DigitalClock = ()=> {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return (
    <div>
      <h2>Digital Clock</h2>
      <div className="digitalClock">{hours}:{minutes}:{seconds}</div>
    </div>
  );
}
export default DigitalClock;
