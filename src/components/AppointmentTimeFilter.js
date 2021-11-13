function appointmentTimeValidator(timeDifference, time) {
  let hours = parseInt(Math.floor(timeDifference / 60));
  let minutes = parseInt(Math.ceil(timeDifference % 60));

  const timeStringFormatter = (hours, minutes) => {
    // just a "beautyfier" for the time string
    if (minutes === 60) {
      hours += 1;
      minutes = 0;
      return `${hours}:0${minutes}`;
    }
    if (minutes >= 10) {
      return `${hours}:${minutes}`;
    }
    return `${hours}:0${minutes}`;
  };

  if (hours < 0) {
    return <h4>Sua consulta já foi às {time}</h4>;
  }
  if (hours === 0) {
    return <h4 className="text-center w-60">Sua consulta começa em {`${minutes} minutos`}</h4>;
  }
  return <h4>Sua consulta começa em {timeStringFormatter(hours, minutes)}</h4>;
}

export default appointmentTimeValidator;
