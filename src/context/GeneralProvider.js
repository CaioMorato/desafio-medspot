// vitals
import React, { useState } from 'react';
// context
import MyContext from './MyContext';

function GeneralProvider({ children }) {
  const [scheduledTime, setScheduledTime] = useState([]);
  const [canceledSchedule, setCanceledSchedule] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  const globalState = {
    scheduledTime,
    setScheduledTime,
    canceledSchedule,
    setCanceledSchedule,
    darkTheme,
    setDarkTheme,
  };

  return <MyContext.Provider value={globalState}>{children}</MyContext.Provider>;
}

export default GeneralProvider;
