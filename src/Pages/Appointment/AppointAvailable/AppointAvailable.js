import React from 'react';


const timeSlot = [
    {
      id: 1,
      name: "Fluoride Treatment",
      time: "10.00 AM - 12.00 PM",
      space: 31
    },
    {
      id: 2,
      name: "Eye Care",
      time: "07.00 PM - 12.00 AM",
      space: 16
    },
    {
      id: 3,
      name: "Cardiology",
      time: "06.00 AM - 11.00 AM",
      space: 43
    },
    {
      id: 4,
      name: "Corona Virus Treatment",
      time: "10.00 AM - 02.00 PM",
      space: 60
    },
    {
      id: 5,
      name: "Orthopedics Specialist",
      time: "08.00 AM - 01.00 PM",
      space: 55
    },
    {
      id: 6,
      name: "Kidney Specialist",
      time: "11.00 AM - 06.00 PM",
      space: 50
    },
    {
      id: 7,
      name: "Hair Solution",
      time: "10.00 AM - 12.00 PM",
      space: 17
    },
    {
      id: 8,
      name: "Otolaryngology Specialist",
      time: "1.00 PM - 04.00 PM",
      space: 77
    },
    {
      id: 9,
      name: "Spine Specialist",
      time: "03.10 PM - 06.00 PM",
      space: 45
    },
  ];

const AppointAvailable = ({date}) => {
    return (
        <div>
            <h1>Date: {date.toDateString()}</h1>
        </div>
    );
};

export default AppointAvailable;