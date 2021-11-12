function AppointmentCard({ name, time }) {
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  const currentMonth = currentTime.getMonth();
  const currentDay = currentTime.getDate();

  const splittedTime = time.split(':');

  const ISOPatientTime = `${currentYear}-${currentMonth + 1}-${currentDay}T${splittedTime[0]}:${
    splittedTime[1]
  }:00Z`;

  const date1 = new Date(currentTime.toISOString());
  const date2 = new Date(ISOPatientTime);

  const timeDifference = Math.abs(date2 - date1) / 1000;

  console.log(timeDifference);

  // console.log(`current Time: ${currentTime}
  // currentYear: ${currentYear}
  // ISO current Time: ${currentTime.toISOString()}
  // ISO Patient Time: ${ISOPatientTime}
  // splittedTime: ${splittedTime}`);
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <h4>{time}</h4>
      </div>
      <div>
        <h4>Sua consulta começa em {}</h4>
      </div>
    </div>
  );
}

export default AppointmentCard;
