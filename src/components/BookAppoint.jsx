// vitals
import { useContext, useState } from 'react';
// context
import MyContext from '../context/MyContext';
import timeArray from '../helpers/timeArray';
import timeHandler from '../helpers/timeHandler';

function BookAppoint() {
  const { availableTimes, bookTime, scheduledTimes } = useContext(MyContext);
  const [selectTime, setSelectTime] = useState(availableTimes[0]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSelectTime(value);
  };

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
            <span className="label-text text-lg">Horários disponíveis</span>
          </label>
          <select
            name="time-select"
            id="time-select"
            className="select select-bordered select-sm w-20"
            value={selectTime}
            onChange={(e) => {
              handleChange(e);
              timeHandler(timeArray, scheduledTimes);
            }}
          >
            {availableTimes.map((time) => (
              <option defaultValue={availableTimes[0]} key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <button
            type="submit"
            className="btn btn-success mt-10"
            onClick={() => bookTime(selectTime)}
          >
            Marcar Consulta
          </button>
        </div>
      </form>
    </section>
  );
}

export default BookAppoint;
