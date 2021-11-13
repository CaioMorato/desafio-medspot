// vitals
import React, { useState } from 'react';
// context
import MyContext from './MyContext';

function GeneralProvider({ children }) {
  const [scheduledTime, setScheduledTime] = useState([]);
  const [canceledSchedule, setCanceledSchedule] = useState([]);

  const bookTime = (time) => {
    const allScheduledTime = [...scheduledTime, time];
    setScheduledTime(allScheduledTime);
  };

  const globalState = {
    scheduledTime,
    setScheduledTime,
    canceledSchedule,
    setCanceledSchedule,
    bookTime,
  };

  return <MyContext.Provider value={globalState}>{children}</MyContext.Provider>;
}

export default GeneralProvider;
