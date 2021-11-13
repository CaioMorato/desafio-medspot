// vitals
import { useContext, useState } from 'react';
// components
import timeArray from '../helpers/timeArray';
import { timeHandler } from '../helpers/timeManipulation';
// context
import MyContext from '../context/MyContext';

function BookAppoint() {
  const { scheduledTime, setScheduledTime } = useContext(MyContext);
  const [patientName, setPatientName] = useState('');
  const [selectTime, setSelectTime] = useState(false);

  // here's where the magic happens, this function generates an array with the time ranges that are different in those 2 arrays
  const availableTimes = timeHandler(timeArray, scheduledTime);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSelectTime(value);
  };

  const bookTime = (time) => {
    const allScheduledTime = [...scheduledTime, time];
    setScheduledTime(allScheduledTime);
  };

  return (
    <section
      id="marcar"
      className="book-apt rounded-lg mx-4 p-4 bg-base-200 flex flex-col items-center md:w-1/2 md:m-auto"
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl mb-3">Marcar consulta para:</span>
          </label>
          <input
            type="text"
            placeholder="Nome do paciente"
            className="input input-bordered mb-3"
            onChange={({ target }) => setPatientName(target.value)}
          />
        </div>
        <div className="form-control flex flex-col">
          <label className="label">
            <span className="label-text text-xl mb-3">Horários disponíveis:</span>
          </label>
          <select
            name="time-select"
            id="time-select"
            className="select select-bordered select-md"
            value={selectTime}
            onChange={(evt) => handleChange(evt)}
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control flex flex-col items-center">
          <button
            type="submit"
            className="btn btn-success my-3 mt-10 w-7/12"
            // the 'disabled' feature here is to prevent the User to click the button again right after the first time. If the User does that, the 'selectTime' won't change generating a bug :D
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
