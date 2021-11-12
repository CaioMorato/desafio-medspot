// vitals
import React, { useState } from 'react';
// components
import timeArray from '../helpers/timeArray';
import timeHandler from '../helpers/timeHandler';
// context
import MyContext from './MyContext';

function GeneralProvider({ children }) {
  const [scheduledTime, setScheduledTime] = useState([]);

  const bookTime = (time) => {
    const allScheduledTime = [...scheduledTime, time];
    setScheduledTime(allScheduledTime);
  };

  const availableTimes = timeHandler(timeArray, scheduledTime);

  const globalState = {
    scheduledTime,
    bookTime,
    availableTimes,
  };

  return <MyContext.Provider value={globalState}>{children}</MyContext.Provider>;
}

export default GeneralProvider;
