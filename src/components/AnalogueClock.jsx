import React, { useState, useEffect } from 'react';
import ClockHand from './ClockHand';
const AnalogueClock = () => {
    const [secondsDegrees, setSecondsDegrees] = React.useState(0);
    const [minutesDegrees, setMinutesDegrees] = React.useState(0);
    const [hoursDegrees, setHoursDegrees] = React.useState(0);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const seconds = now.getSeconds();
      setSecondsDegrees(((seconds / 60) * 360) - 90);

      const minutes = now.getMinutes();
      setMinutesDegrees(((minutes / 60) * 360) - 90);

      const hours = now.getHours() + minutes / 60;
      setHoursDegrees(((hours / 12) * 360) - 90);
    };

    // Call updateClock once immediately to set the initial time
    updateClock(); 

    const intervalId = setInterval(updateClock, 1000);
   
    return () => {
      clearInterval(intervalId);
    };
  }, []);
        return (
          <>
          <h2>Analogue Clock</h2>
          <div id="clockFace">
          <ClockHand id="secondHand" angle={secondsDegrees} />
          <ClockHand id="minuteHand" angle={minutesDegrees} />
          <ClockHand id="hourHand" angle={hoursDegrees} />
          <div id="pin"></div>
        </div>
        </>
        );
      };
export default AnalogueClock;
