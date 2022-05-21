import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from '../Service/Service';
import Teeth from "../../../Images/Services/whitening.png";
import Eye from "../../../Images/Services/Eye.png";
import Heart from "../../../Images/Services/Heart.jpg";
import Corona from "../../../Images/Services/Corona.png";
import Aurthopedics from "../../../Images/Services/Aurthopedics.png";
import kidney from "../../../Images/Services/kidney.png";
import Hair from "../../../Images/Services/Hair-Solution.png";
import NET from "../../../Images/Services/Nose-Ear-Throat.png";
import Spine from "../../../Images/Services/Spine.png";

const services = [
      {
        name: "Fluoride Treatment",
        description:
          "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist.",
        img: Teeth,
      },
      {
        name: "Eye Care",
        description:
          " You may feel a bit of a sting, but thats a reaction from the local anesthetic when it starts to block the nerve signals to stop the pain.",
        img: Eye,
      },
      {
        name: "Heart Specialist",
        description:
          "The good news is that yellow teeth can become white again. Part of the process takes place at home, while the other part is in your dentists office.",
        img: Heart,
      },
      {
        name: "Corona Virus Treatment",
        description:
          "The good news is that yellow teeth can become white again. Part of the process takes place at home, while the other part is in your dentists office.",
        img: Corona,
      },
      {
        name: "Orthopedics Specialist",
        description:
          "The good news is that yellow teeth can become white again. Part of the process takes place at home, while the other part is in your dentists office.",
        img: Aurthopedics,
      },
      {
        name: "Kidney Specialist",
        description:
          "The good news is that yellow teeth can become white again. Part of the process takes place at home, while the other part is in your dentists office.",
        img: kidney,
      },
      {
        name: "Hair Solution",
        description:
          "The good news is that yellow teeth can become white again. Part of the process takes place at home, while the other part is in your dentists office.",
        img: Hair,
      },
      {
        name: "Nose-Ear-Throat Specialist",
        description:
          "The good news is that yellow teeth can become white again. Part of the process takes place at home, while the other part is in your dentists office.",
        img: NET,
      },
      {
        name: "Spine Specialist",
        description:
          "The good news is that yellow teeth can become white again. Part of the process takes place at home, while the other part is in your dentists office.",
        img: Spine,
      },
    ];

const Services = () => {
  return (
    
      <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {
            services.map(service=><Service
            key ={service.name}
            service ={service}
            ></Service>)
          }
        </Grid>
        </Container>
      </Box>
   
  );
};

export default Services;
