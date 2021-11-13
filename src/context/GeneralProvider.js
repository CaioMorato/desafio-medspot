// vitals
import React, { useState } from 'react';
// context
import MyContext from './MyContext';

function GeneralProvider({ children }) {
  const [scheduledTime, setScheduledTime] = useState([]);
  const [canceledSchedule, setCanceledSchedule] = useState([]);


  const globalState = {
    scheduledTime,
    setScheduledTime,
    canceledSchedule,
    setCanceledSchedule,
  };

  return <MyContext.Provider value={globalState}>{children}</MyContext.Provider>;
}

export default GeneralProvider;
