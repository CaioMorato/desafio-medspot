// vitals
import { useContext, useState } from 'react';
// components
import themeToggle from '../helpers/themeToggle';
// context
import MyContext from '../context/MyContext';
import AppointmentCard from './AppointmentCard';

function CheckAppoint() {
  const { scheduledTime, canceledSchedule, darkTheme } = useContext(MyContext);
  const [exhibitionFilter, setExhibitionFilter] = useState(true);

  const arrayMixUp = [...canceledSchedule, ...scheduledTime];

  return (
    <section
      id="visualizar"
      className={`${themeToggle(
        'card',
        darkTheme
      )} check-apt rounded-lg mx-4 min-h-1/4 p-3 pb-7  flex flex-col items-center md:w-1/2 md:m-auto border-smooth-grey`}
    >
      <div className="filter-buttons flex gap-x-7 p-4 ">
        <button
          className="btn btn-info btn-blue-darker-color "
          onClick={() => setExhibitionFilter(false)}
        >
          Todas
        </button>
        <button
          className="btn btn-success btn-blue-color"
          onClick={() => setExhibitionFilter(true)}
        >
          Válidas
        </button>
      </div>
      {arrayMixUp
        // this filter makes the exhibition buttons work
        .filter(({ valid }) => (exhibitionFilter ? valid : valid || !valid))
        // this sort will keep all cards organized by time (with the funky unicode behavior)
        .sort(function (a, b) {
          return a.time.localeCompare(b.time);
        })
        // this map generates the appointment cards
        .map(({ name, time, valid }) => (
          <AppointmentCard key={`${name} ${time}`} name={name} time={time} valid={valid} />
        ))}
    </section>
  );
}

export default CheckAppoint;
