import React, { useState, useEffect, useRef } from 'react';

const AnalogueClock = () => {
  const clockFaceRef = useRef(null);
  const secondHandRef = useRef(null);
  const minuteHandRef = useRef(null);
  const hourHandRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) - 90;
      secondHandRef.current.style.transform = `rotate(${secondsDegrees}deg)`;

      const minutes = now.getMinutes();
      const minutesDegrees = ((minutes / 60) * 360) - 90;
      minuteHandRef.current.style.transform = `rotate(${minutesDegrees}deg)`;

      const hours = now.getHours() + minutes / 60;
      const hoursDegrees = ((hours / 12) * 360) - 90;
      hourHandRef.current.style.transform = `rotate(${hoursDegrees}deg)`;
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Analogue</h2>
      <div>
        <div ref={clockFaceRef} id="clockFace">
          <div ref={secondHandRef} id="secondHand"></div>
          <div ref={minuteHandRef} id="minHand"></div>
          <div ref={hourHandRef} id="hrHand"></div>
          <div id="pin"></div>
        </div>
      </div>
    </div>
  );
};
export default AnalogueClock;

