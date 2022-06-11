import { Container, Grid } from '@mui/material';
import React from 'react';
import tempImg from "../../../Images/Appointment-Pictures/Appointment-Banner.jpg";
import Calender from '../../../Shared/Calender/Calender';

const AppointmentBanner = () => {
    return (
       <Container style={{marginBottom: 100, marginTop: 100}}>
         <Grid container spacing={2}>
            <Grid xs={12} md={6} lg={5}>
                <Calender></Calender>
            </Grid>
            <Grid xs={12} md={6} lg={7}>
                <img style={{width: "100%"}} src={tempImg} alt=""/>
            </Grid>
         </Grid>
       </Container>
    );
};

export default AppointmentBanner;