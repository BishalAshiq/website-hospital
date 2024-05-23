import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import "./Banner.css";
import banner2 from "../../../Images/Banner/banner-2.jpg";
import banner4 from "../../../Images/Banner/Banner-4.png";
import banner5 from "../../../Images/Banner/banner-5.png";
import banner6 from "../../../Images/Banner/banner-6.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/appointment");
    } else {
      localStorage.setItem("redirectToAppointment", "true");
      navigate("/login");
    }
  };

  return (
    <section>
      <div className="banner-section">
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
              <span style={{ color: "orange" }}> The Better</span> Life!
            </h1>
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleAppointmentClick}>
              Get Appointment
            </Button>
          </div>
          <div className="img-b" data-aos="fade-right">
            <img style={{ width: 550, height: 300, borderRadius: 15 }} src={banner2} alt="" />
          </div>
        </div>

        <div className="short-temp" data-aos="zoom-in-up">
          <div>
            <img style={{ borderRadius: 10, marginBottom: 20 }} src={banner4} alt="" />
          </div>
          <div>
            <img style={{ borderRadius: 10, marginBottom: 20 }} src={banner5} alt="" />
          </div>
          <div>
            <img style={{ borderRadius: 10 }} src={banner6} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
