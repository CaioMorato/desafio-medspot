// components
import { timeFormatConverter, timeDifferenceCalc } from '../helpers/timeManipulation';
import appointmentTimeValidator from './AppointmentTimeFilter';

function AppointmentCard({ name, time }) {
  const formattedTime = timeFormatConverter(time);
  const timeDifference = timeDifferenceCalc(formattedTime);

  return (
    <div
      className={`${
        timeDifference < 120 ? 'bg-error' : 'bg-primary-content'
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
        <button className="btn btn-sm btn-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 mr-2 stroke-current "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
