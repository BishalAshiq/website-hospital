import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import "./Banner.css";
import banner2 from "../../../Images/Banner/banner-2.jpg";
import banner4 from "../../../Images/Banner/Banner-4.png";
import banner5 from "../../../Images/Banner/Banner-5.png";
import banner6 from "../../../Images/Banner/Banner-6.png";

const Banner = () => {
  return (
    <section>
      <div
        className="banner"
        style={{
          backgroundImage: `url("https://i.ibb.co/K02cRf6/banner-2.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div data-aos="fade-left">
          <h1 className="b-h1">
            Your Smile Is Here <br /> For
            <span style={{ color: "orange" }}>The Better</span> Life!
          </h1>
          {/* <p>
              Hospitals are only an intermediate stage of civilization <br/> never intended to take in the whole sick population.
            </p> */}
          <Button variant="contained" endIcon={<SendIcon />}>
            Get Appointment
          </Button>
        </div>
        <div className="img-b" data-aos="fade-right">
          <img src={banner2} alt="" />
        </div>
      </div>

      <div className="short-temp">
        <div data-aos="zoom-in-right">
          <img src={banner4} alt="" />
        </div>
        <div data-aos="zoom-in-up">
          <img src={banner5} alt="" />
        </div>
        <div data-aos="zoom-in-left">
          <img src={banner6} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
