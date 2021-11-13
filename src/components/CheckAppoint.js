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
    <section className="check-apt rounded-lg mx-2 p-3 bg-base-200 flex flex-col items-center">
      <div className="filter-buttons flex gap-x-10">
        <button className="btn btn-info" onClick={() => setExhibitionFilter(false)}>
          Todas
        </button>
        <button className="btn btn-success " onClick={() => setExhibitionFilter(true)}>
          Válidas
        </button>
      </div>
      {arrayMixUp
        .sort(function (a, b) {
          return a.time.localeCompare(b.time);
        })
        .filter(({ valid }) => (exhibitionFilter ? valid : valid || !valid))
        .map(({ name, time, valid }) => (
          <AppointmentCard key={`${name} ${time}`} name={name} time={time} valid={valid} />
        ))}
    </section>
  );
}

export default CheckAppoint;
