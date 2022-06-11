import React from 'react';
import AppointmentBanner from '../AppoinmentBanner/AppointmentBanner';
import AppointAvailable from '../AppointAvailable/AppointAvailable';


const Appointment = () => {
    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <AppointAvailable></AppointAvailable>
        </div>
    );
};

export default Appointment;