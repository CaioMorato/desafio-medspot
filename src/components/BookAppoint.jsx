function BookAppoint() {
  const timeArray = [
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
  ];
  return (
    <section className="book-apt-form rounded-lg mx-2 p-3 bg-red-100">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Marcar consulta para:</span>
          </label>
          <input type="text" placeholder="Nome do paciente" className="input input-bordered" />
        </div>
        <div className="form-control flex flex-col">
          <label className="label">
            <span className="label-text text-lg">Em qual horário?</span>
          </label>
          <select name="time-select" id="time-select" className="w-20">
            {timeArray.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </form>
    </section>
  );
}

export default BookAppoint;
