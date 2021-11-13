// vitals
import { useContext, useState } from 'react';
// components
import timeArray from '../helpers/timeArray';
import { timeHandler } from '../helpers/timeManipulation';
// context
import MyContext from '../context/MyContext';

function BookAppoint() {
  const { bookTime, scheduledTime } = useContext(MyContext);
  const [patientName, setPatientName] = useState('');
  const [selectTime, setSelectTime] = useState(false);

  const availableTimes = timeHandler(timeArray, scheduledTime);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSelectTime(value);
  };

  return (
    <section className="book-apt rounded-lg mx-2 p-3 bg-base-200">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Marcar consulta para:</span>
          </label>
          <input
            type="text"
            placeholder="Nome do paciente"
            className="input input-bordered"
            onChange={({ target }) => setPatientName(target.value)}
          />
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
            onChange={(e) => handleChange(e)}
          >
            {availableTimes.map((time, index) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <button
            type="submit"
            className="btn btn-success mt-10"
            disabled={!selectTime}
            onClick={() => {
              bookTime({ name: patientName, time: selectTime, valid: true });
              setSelectTime(false);
            }}
          >
            Marcar Consulta
          </button>
        </div>
      </form>
    </section>
  );
}

export default BookAppoint;
