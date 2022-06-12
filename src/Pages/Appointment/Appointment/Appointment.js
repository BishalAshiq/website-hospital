import React from "react";
import AppointmentBanner from "../AppoinmentBanner/AppointmentBanner";
import AppointAvailable from "../AppointAvailable/AppointAvailable";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AppointAvailable date={date}></AppointAvailable>
    </div>
  );
};

export default Appointment;
