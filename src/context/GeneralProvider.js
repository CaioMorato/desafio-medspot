// vitals
import React, { useState } from 'react';
// components
import timeArray from '../helpers/availableTime';
// context
import MyContext from './MyContext';

function GeneralProvider({ children }) {
  const [scheduledTime, setScheduledTime] = useState([]);

  const bookTime = (time) => {
    const allScheduledTime = [...scheduledTime, time];
    setScheduledTime(allScheduledTime);
  };

  const globalState = {
    timeArray,
    scheduledTime,
    bookTime,
  };

  return <MyContext.Provider value={globalState}>{children}</MyContext.Provider>;
}

export default GeneralProvider;
