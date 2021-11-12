const ISOtimeConverter = (time) => {
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

const timeDifferenceCalc = (appointmentTime) => {
  const currentTime = new Date();
  const milisecondsDiff = appointmentTime - currentTime;

  return milisecondsDiff / 1000 / 60;
};

const timeValidator = (timeDifference) => {
  if (timeDifference < 119.28) {
    return 'Seu agendamento começará em menos de 2 horas';
  } else {
    return 'Seu agendamento começará mais de duas horas';
  }
};

// console.log(ISOtimeConverter('10:30'));
// console.log(timeDifferenceCalc(ISOtimeConverter('14:00'), new Date()));
console.log(timeValidator(timeDifferenceCalc(ISOtimeConverter('14:30'), new Date())));
