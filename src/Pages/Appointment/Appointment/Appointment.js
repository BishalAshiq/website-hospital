import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import AppointmentBanner from "../AppoinmentBanner/AppointmentBanner";
import AppointAvailable from "../AppointAvailable/AppointAvailable";

const Appointment = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    if (!isLoggedIn) {
      localStorage.setItem("redirectPath", "/appointment");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null; // Optionally render a loading state or a message

  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AppointAvailable date={date}></AppointAvailable>
    </div>
  );
};

export default Appointment;
