// vitals
import { useContext } from 'react';
// components
import appointmentTimeValidator from './AppointmentTimeFilter';
import { timeFormatConverter, timeDifferenceCalc } from '../helpers/timeManipulation';
// context
import MyContext from '../context/MyContext';

function AppointmentCard({ name, time, valid }) {
  const { scheduledTime, setScheduledTime, canceledSchedule, setCanceledSchedule } =
    useContext(MyContext);

  // formats time into javascript 'new Date' constructor
  const formattedTime = timeFormatConverter(time);
  // gets time difference from the current time and the appointment time
  const timeDifference = timeDifferenceCalc(formattedTime);

  const removeScheduledTime = (appointmentObject) => {
    const { time: appTime } = appointmentObject;

    const canceledAppointmentObject = { ...appointmentObject, valid: false };

    const removeTime = scheduledTime.filter(({ time }) => time !== appTime);

    setScheduledTime(removeTime);
    setCanceledSchedule([...canceledSchedule, canceledAppointmentObject]);
  };

  return (
    <div
      className={`${
        timeDifference < 120 ? 'bg-orange-close-appointment' : 'bg-primary-content'
      } appointment-card m-3 p-3 w-10/12 shadow-smooth rounded-lg`}
    >
      <div className="appointment-name-container my-3">
        <h3 className="text-center font-bold card-title">{name}</h3>
      </div>
      <div className="appointment-time-container my-3">
        <h4 className="text-center roboto-font">{time}</h4>
      </div>
      <div className="appointment-timediff-container my-3 flex flex-col items-center">
        {/* generates different card messages depending on the time difference */}
        {appointmentTimeValidator(timeDifference, time)}
      </div>
      <div className="appointment-buttons-container flex justify-center my-3">
        <button
          className="btn btn-sm bg-red-tomato"
          onClick={() => removeScheduledTime({ name, time })}
        >
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
