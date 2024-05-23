import { Container, Grid } from "@mui/material";
import React from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Fluoride Treatment",
    time: "10.00 AM - 12.00 PM",
    space: 31,
  },
  {
    id: 2,
    name: "Eye Care",
    time: "07.00 PM - 12.00 AM",
    space: 16,
  },
  {
    id: 3,
    name: "Cardiology",
    time: "06.00 AM - 11.00 AM",
    space: 43,
  },
  {
    id: 4,
    name: "Corona Virus Treatment",
    time: "10.00 AM - 02.00 PM",
    space: 60,
  },
  {
    id: 5,
    name: "Orthopedics Specialist",
    time: "08.00 AM - 01.00 PM",
    space: 55,
  },
  {
    id: 6,
    name: "Kidney Specialist",
    time: "11.00 AM - 06.00 PM",
    space: 50,
  },
  {
    id: 7,
    name: "Hair Solution",
    time: "10.00 AM - 12.00 PM",
    space: 17,
  },
  {
    id: 8,
    name: "Otolaryngology Specialist",
    time: "1.00 PM - 04.00 PM",
    space: 77,
  },
  {
    id: 9,
    name: "Spine Specialist",
    time: "03.10 PM - 06.00 PM",
    space: 45,
  },
];

const AppointAvailable = ({ date }) => {
  return (
    <div style={{overflow: "hidden"}}>
      <Container>
      <h1 style={{backgroundColor: "#08A4CB", color: "white", border: "2px solid #FA9000", borderRadius: 20, boxShadow: "2px 2px gray", marginBottom: 80}}><span style={{textTransform: "uppercase"}}>Take A Date : </span> {date.toDateString()}</h1>
      <Grid container spacing={2} style={{marginBottom: 80}}>
          {
            bookings.map(booking=><Booking
            key={booking.id}
            booking={booking}
            date={date}
            ></Booking>)
          }
      </Grid>
    </Container>
    </div>
  );
};

export default AppointAvailable;
