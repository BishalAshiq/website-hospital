import { Container } from "@mui/system";
import React from "react";
import "./ExtraTemp.css";
import doctors from '../../../Images/Extra-section/Doctors.png';

const ExtraTemp = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/GdrDJYR/extra-Temp.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingBottom: "70px",
      }}
    >
      <Container>
       <div className="section">
       <div>
          <img src={doctors} alt=""/>
        </div>
        <div className="temp">
          <h1>
            Make Your Appointment <br /> Today
          </h1>
          <p>
            People with health problems who visit the hospital for diagnosis or
            treatment, but do not at this time require a bed or to be admitted
            for overnight care.
          </p>
        </div>
       </div>
      </Container>
    </div>
  );
};

export default ExtraTemp;
