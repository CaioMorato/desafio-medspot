// vitals
import { useContext } from 'react';
// context
import MyContext from '../context/MyContext';
import AppointmentCard from './AppointmentCard';

function CheckAppoint() {
  const { scheduledTime } = useContext(MyContext);
  return (
    <section className="check-apt rounded-lg mx-2 p-3 bg-base-200">
      {scheduledTime.map(({ name, time }) => (
        <AppointmentCard key={`${name} ${time}`} name={name} time={time} />
      ))}
    </section>
  );
}

export default CheckAppoint;
