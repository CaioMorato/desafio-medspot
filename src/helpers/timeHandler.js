const timeHandler = (timeArray, scheduledTime) => {
  const availableTimes = timeArray.filter((eachTime) => !scheduledTime.includes(eachTime));
  return availableTimes;
};

export default timeHandler;
