import { Container, Grid } from "@mui/material";
import React from "react";
import tempImg from "../../../Images/Appointment-Pictures/Appointment-Banner.jpg";
import Calender from "../../../Shared/Calender/Calender";
import "./AppointmentBanner.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <Container className="appoint-banner">
      <Grid container spacing={2}>
        <Grid xs={12} md={6} lg={6} data-aos="zoom-in-left">
          <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid xs={12} md={6} lg={6} data-aos="zoom-in-right">
          <img style={{ width: "100%" }} src={tempImg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentBanner;
