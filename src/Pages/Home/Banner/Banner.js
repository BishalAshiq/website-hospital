import { Button, Container } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from "react";
import "./Banner.css";
import banner2 from "../../../Images/Banner/banner-2.jpg";
import banner4 from "../../../Images/Banner/banner-4.png";
import banner5 from "../../../Images/Banner/banner-5.png";
import banner6 from "../../../Images/Banner/banner-6.png";

const Banner = () => {
  return (
    <div>
      <Container>
        <section>
         <div className="banner" 
          style={{
            backgroundImage: `url("https://i.ibb.co/FBv00Rg/banner.png")`,
          }}>
         <div>
            <h1>
              Your Smile Is Here <br /> For{" "}
              <span style={{ color: "orange" }}>The Better</span> Life!
            </h1>
            {/* <p>
              Hospitals are only an intermediate stage of civilization <br/> never intended to take in the whole sick population.
            </p> */}
            <Button variant="contained" endIcon={<SendIcon/>}>
            Get Appointment
          </Button>
          </div>
          <div>
            <img src={banner2} alt="" />
          </div>
         </div>

         <div className="short-banner">
          <div>
            <img src={banner4} alt=""/>
          </div>
          <div>
          <img src={banner6} alt=""/>
          </div>
          <div>
          <img src={banner5} alt=""/>  
          </div>
         </div>
        </section>
      </Container>
    </div>
  );
};

export default Banner;
