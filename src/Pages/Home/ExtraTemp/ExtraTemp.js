import { Container } from "@mui/system";
import React from "react";
import "./ExtraTemp.css";
import doctors from "../../../Images/Extra-section/Doctor-1.png";

const ExtraTemp = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/GdrDJYR/extra-Temp.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingBottom: "10px",
      }}
    >
      <Container>
        <div className="section">
          <div className="temp-img">
            <img src={doctors} alt="" />
          </div>
          <div>
            <h1 className="temp-h1">
              Make Your Appointment <br /> Today
            </h1>
            <p className="temp-p">
              People with health problems who visit the hospital for diagnosis
              or <b />
              treatment, but do not at this time require a bed or to be admitted{" "}
              <b />
              for overnight care.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExtraTemp;
