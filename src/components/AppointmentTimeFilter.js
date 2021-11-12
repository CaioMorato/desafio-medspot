function appointmentTimeValidator(timeDifference, time) {
  const hours = parseInt(Math.floor(timeDifference / 60));
  const minutes = parseInt(Math.ceil(timeDifference % 60));

  const minuteConverter = (minutes) => {
    if (minutes < 10) {
      return `0${minutes}`;
    }
    if (minutes >= 10) {
      return minutes;
    }
  };

  if (hours < 0) {
    return <h4 className="text-center">Sua consulta já foi às {time}</h4>;
  }
  if (hours === 0) {
    return <h4 className="text-center">Sua consulta começa em {`${minutes} minutos`}</h4>;
  }
  return (
    <h4 className="text-center">Sua consulta começa em {`${hours}:${minuteConverter(minutes)}`}</h4>
  );
}

export default appointmentTimeValidator;
