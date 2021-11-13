export const timeHandler = (timeArray, scheduledTime) => {
  const times = scheduledTime.map(({ time }) => time);

  const availableTimes = timeArray.filter((eachTime) => !times.includes(eachTime));

  return availableTimes;
};

export const timeFormatConverter = (time) => {
  const splittedTime = time.split(':');
  const timeHour = splittedTime[0];
  const timeMinutes = splittedTime[1];
  const currentTime = new Date();

  return new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    timeHour,
    timeMinutes
  );
};

export const timeDifferenceCalc = (appointmentTime) => {
  const currentTime = new Date('Fri Nov 13 2021 10:00:47 GMT-0300 (Horário Padrão de Brasília)');
  const milisecondsDiff = appointmentTime - currentTime;

  return milisecondsDiff / 1000 / 60;
};

// const timeValidator = (timeDifference) => {
//   if (timeDifference < 120) {
//     return 'Seu agendamento começará em menos de 2 horas';
//   } else {
//     return 'Seu agendamento começará mais de duas horas';
//   }
// };
