import React from "react";
import './Services.css';
import Box from "@mui/material/Box";
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
          "Optometrists are healthcare professionals with a degree in eye care, specifically. They are Doctors of Optometry this includes optical.",
        img: Eye,
      },
      {
        name: "Cardiology",
        description:
          "All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are through different training pathways.",
        img: Heart,
      },
      {
        name: "Corona Virus Treatment",
        description:
          "Coronaviruses die very quickly when exposed to the UV light in sunlight.SARS-CoV-2 survives longest when the temperature is at room temperature or lower",
        img: Corona,
      },
      {
        name: "Orthopedics Specialist",
        description:
          "An orthopedic doctor, also known as an orthopedic surgeon, specializes in diagnosing and treating injuries or illnesses to the musculoskeletal system.",
        img: Aurthopedics,
      },
      {
        name: "Kidney Specialist",
        description:
          "Neurologists or kidney doctors, study the kidneys and any diseases that affect them. They complete 2 more years of training after medical school and residency.",
        img: kidney,
      },
      {
        name: "Hair Solution",
        description:
          "Hair Solution is the leader in state-of-the-art hair replacement systems, providing a 100% natural look that's undetectable to sight and touch.",
        img: Hair,
      },
      {
        name: "Otolaryngology Specialist",
        description:
          "Otolaryngology is a medical specialty which is focused on the ears, nose, and throat. It is also called otolaryngology-head and neck surgery.",
        img: NET,
      },
      {
        name: "Spine Specialist",
        description:
          "Neurologists provide medical, but not surgical, treatment of diseases affecting the brain, spine and nervous system.",
        img: Spine,
      },
    ];

const Services = () => {
  return (
    
      <Box sx={{ flexGrow: 1, marginBottom: "60px" }}>
        <h1 className="services-h1" style={{ color:"#44FDDC", marginTop: "150px"}}>Services We Provide For You</h1>
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
