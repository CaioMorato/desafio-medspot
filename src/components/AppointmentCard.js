// vitals
import { useContext } from 'react';
// components
import appointmentTimeValidator from './AppointmentTimeFilter';
import { timeFormatConverter, timeDifferenceCalc } from '../helpers/timeManipulation';
// context
import MyContext from '../context/MyContext';

function AppointmentCard({ name, time }) {
  const { scheduledTime, setScheduledTime } = useContext(MyContext);
  const formattedTime = timeFormatConverter(time);
  const timeDifference = timeDifferenceCalc(formattedTime);

  const removeScheduledTime = (specTime) => {
    const removeTime = scheduledTime.filter(({ time }) => time !== specTime);
    setScheduledTime(removeTime);
  };

  return (
    <div
      className={`${
        timeDifference < 120 ? 'bg-warning' : 'bg-primary-content'
      } appointment-card m-3 p-4 shadow-lg`}
    >
      <div className="appointment-name-container my-3">
        <h3 className="text-center font-bold">{name}</h3>
      </div>
      <div className="appointment-time-container my-3">
        <h4 className="text-center">{time}</h4>
      </div>
      <div className="appointment-timediff-container my-3">
        {appointmentTimeValidator(timeDifference, time)}
      </div>
      <div className="appointment-buttons-container flex justify-center my-3">
        <button className="btn btn-sm btn-error" onClick={() => removeScheduledTime(time)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 mr-2 stroke-current "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default AppointmentCard;
