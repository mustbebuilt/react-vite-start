import { useEffect } from 'react';
const AnalogueClock = () => {
 
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours() + minutes / 60;
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
 
          <div id="pin"></div>
        </div>
        </>
        );
      };
export default AnalogueClock;