// vitals
import { useContext, useState } from 'react';
// context
import MyContext from '../context/MyContext';
import AppointmentCard from './AppointmentCard';

function CheckAppoint() {
  const { scheduledTime, canceledSchedule } = useContext(MyContext);
  const [exhibitionFilter, setExhibitionFilter] = useState(true);

  const arrayMixUp = [...canceledSchedule, ...scheduledTime];

  return (
    <section
      id="visualizar"
      className="check-apt rounded-lg mx-4 min-h-1/4 card-color p-3 flex flex-col items-center md:w-1/2 md:m-auto card-border"
    >
      <div className="filter-buttons flex gap-x-7 p-4 ">
        <button className="btn btn-info btn-blue-color" onClick={() => setExhibitionFilter(false)}>
          Todas
        </button>
        <button
          className="btn btn-success btn-blue-darker-color"
          onClick={() => setExhibitionFilter(true)}
        >
          Válidas
        </button>
      </div>
      {arrayMixUp
        // this first .sort will keep all cards organized by time (with the funky unicode behavior)
        .sort(function (a, b) {
          return a.time.localeCompare(b.time);
        })
        // this second filter makes the exhibition buttons work
        .filter(({ valid }) => (exhibitionFilter ? valid : valid || !valid))
        // this third map generates the appointment cards
        .map(({ name, time, valid }) => (
          <AppointmentCard key={`${name} ${time}`} name={name} time={time} valid={valid} />
        ))}
    </section>
  );
}

export default CheckAppoint;
